# _*_ coding: utf-8 _*_
import os,sys
from osgeo import gdal,ogr,osr

'''计算tiff影像外包矩形'''
def calcTiffBbox(tiff_path):
    gtif = gdal.Open(tiff_path)
    gt = gtif.GetGeoTransform()
    cols = gtif.RasterXSize
    rows = gtif.RasterYSize
    extent = GetExtent(gt,cols,rows)
    # print '====extent_proj',extent
    src_srs=osr.SpatialReference()
    src_srs.ImportFromWkt(gtif.GetProjection())
    tgt_srs = src_srs.CloneGeogCS()
    geo_ext = ReprojectCoords(extent,src_srs,tgt_srs)
    # print '====extent_lnglat',geo_ext
    # print type(extent)
    return geo_ext

'''计算shp矢量外包矩形'''
def calcShpBbox(shp_path):
    driver = ogr.GetDriverByName('ESRI Shapefile')
    dataSource = driver.Open(shp_path, 0) # 0 means read-only. 1 means writeable.
    # Check to see if shapefile is found.
    if dataSource is None:
        print '无法打开shp文件： %s' % (shp_path)
    else:
        print '读取的shp文件是： %s' % (shp_path)
        layer = dataSource.GetLayer()
        #extent的类型是tuple,包含4个元素，Xmin、Xmax、Ymin、Ymax
        ext = layer.GetExtent()
        # bbox类型是list
        col,row=2,4
        bbox = [[0 for x in range(col)] for y in range(row)]
        bbox[0][0]=ext[0]
        bbox[0][1]=ext[3]
        bbox[1][0]=ext[0]
        bbox[1][1]=ext[2]
        bbox[2][0]=ext[1]
        bbox[2][1]=ext[2]
        bbox[3][0]=ext[1]
        bbox[3][1]=ext[3]
        # extentList = [[ext[0],ext[3]], [ext[2],[ext[3]], [ext[1],[ext[2]], [ext[1],[ext[3]]]
        # print bbox
        # print type(bbox)
        return bbox

def GetExtent(gt,cols,rows):
    ''' Return list of corner coordinates from a geotransform
        @type gt:   C{tuple/list}
        @param gt: geotransform
        @type cols:   C{int}
        @param cols: number of columns in the dataset
        @type rows:   C{int}
        @param rows: number of rows in the dataset
        @rtype:    C{[float,...,float]}
        @return:   coordinates of each corner
    '''
    ext=[]
    xarr=[0,cols]
    yarr=[0,rows]

    for px in xarr:
        for py in yarr:
            x=gt[0]+(px*gt[1])+(py*gt[2])
            y=gt[3]+(px*gt[4])+(py*gt[5])
            ext.append([x,y])
            # print x,y
        yarr.reverse()
    return ext

def ReprojectCoords(coords,src_srs,tgt_srs):
    ''' Reproject a list of x,y coordinates.
        @type geom:     C{tuple/list}
        @param geom:    List of [[x,y],...[x,y]] coordinates
        @type src_srs:  C{osr.SpatialReference}
        @param src_srs: OSR SpatialReference object
        @type tgt_srs:  C{osr.SpatialReference}
        @param tgt_srs: OSR SpatialReference object
        @rtype:         C{tuple/list}
        @return:        List of transformed [[x,y],...[x,y]] coordinates
    '''
    trans_coords=[]
    transform = osr.CoordinateTransformation( src_srs, tgt_srs)
    for x,y in coords:
        x,y,z = transform.TransformPoint(x,y)
        trans_coords.append([x,y])
    return trans_coords

def parseShapefile(shp_path):
    driver = ogr.GetDriverByName('ESRI Shapefile')
    dataSource = driver.Open(shp_path, 0) # 0 means read-only. 1 means writeable.
    # Check to see if shapefile is found.
    if dataSource is None:
        print 'Could not open %s' % (shp_path)
    else:
        print 'Opened %s' % (shp_path)
        layer = dataSource.GetLayer()
        #extent的类型是tuple,包含4个元素，Xmin、Xmax、Ymin、Ymax
        ext = layer.GetExtent()
        # print ext
        # print type(ext)
        # bbox类型是list
        col,row=2,4
        bbox = [[0 for x in range(col)] for y in range(row)]
        bbox[0][0]=ext[0]
        bbox[0][1]=ext[3]
        bbox[1][0]=ext[0]
        bbox[1][1]=ext[2]
        bbox[2][0]=ext[1]
        bbox[2][1]=ext[2]
        bbox[3][0]=ext[1]
        bbox[3][1]=ext[3]
        # extentList = [[ext[0],ext[3]], [ext[2],[ext[3]], [ext[1],[ext[2]], [ext[1],[ext[3]]]
        print bbox
        print type(bbox)
        featureCount = layer.GetFeatureCount()
        print "Number of features in %s: %d" % (os.path.basename(shp_path),featureCount)


def parseTiff(tiff_path):
    gtif = gdal.Open(tiff_path)
    # print gtif.GetMetadata()
    # print gtif.GetDescription()
    # print gtif.RasterCount
    # print gtif.RasterXSize
    # print gtif.RasterYSize
    # print gtif.GetGeoTransform()
    # print gtif.GetProjection()
    gt = gtif.GetGeoTransform()
    cols = gtif.RasterXSize
    rows = gtif.RasterYSize
    extent = GetExtent(gt,cols,rows)
    # print extent
    # print type(extent)
    src_srs=osr.SpatialReference()
    src_srs.ImportFromWkt(gtif.GetProjection())
    tgt_srs = src_srs.CloneGeogCS()
    geo_ext = ReprojectCoords(extent,src_srs,tgt_srs)
    print geo_ext
    # print dir(gtif)

def polygonizeTiff(tiff_path):
    src_ds = gdal.Open(tiff_path)
    if src_ds is None:
        print 'Unable to open %s' % src_filename
        sys.exit(1)
    try:
        srcband = src_ds.GetRasterBand(3)
    except RuntimeError, e:
        # for example, try GetRasterBand(10)
        print 'Band ( %i ) not found' % band_num
        print e
        sys.exit(1)

    dst_layername = "dst"
    drv = ogr.GetDriverByName("ESRI Shapefile")
    dst_ds = drv.CreateDataSource( dst_layername + ".shp" )
    dst_layer = dst_ds.CreateLayer(dst_layername, srs = None )

    gdal.Polygonize( srcband, None, dst_layer, -1, [], callback=None )


if __name__ == '__main__':
    # shpPath = "/root/Documents/dataseeds/lhkadmin/lhkadmin.shp"
    # shpPath = u"/root/Documents/dataseeds/LHK老河口poicopy/老河口poicopy.shp"
    shpPath = u"/root/Documents/dataseeds/LHK老河口铁路/grailn.shp"
    tifPath = "/root/Documents/dataseeds/rstif/xindian-uav.tif"
    # tifPath = "/root/Documents/dataseeds/rs/bigemap/whu_campus_Level_19.tif"
    # calcShpBbox(shpPath)
    calcTiffBbox(tifPath)
    parseTiff(tifPath)
    # polygonizeTiff(tifPath)
