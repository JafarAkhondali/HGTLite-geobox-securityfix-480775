# _*_ coding: utf-8 _*_
import zipfile
import os.path
import os

'''解压zip文件
params /opt/tempx/bou2_4m.zip
return /opt/tempx/bou2_4m_shp/a.shp
'''
def unzip_shp(zip_full_path):

    # 不转码会乱码，不转码zipfile报错
    fileDirPath =zip_full_path.rsplit('/',1)[0]
    fileFullName = zip_full_path.rsplit('/',1)[1]

    unzip_dir =zip_full_path.rsplit('.',1)[0]+'_shp'
    zip_name = zip_full_path
    # print unzip_dir, zip_name
    # 示例 /opt/tempx/bou2_4m_shp /opt/tempx/bou2_4m.zip

    if not os.path.exists(unzip_dir):
        os.mkdir(unzip_dir)
    zfobj = zipfile.ZipFile(zip_name)
    for file_name in zfobj.namelist():
        file_name = file_name.replace('\\', '/')
        if file_name.endswith('/'):
            try:
                file_name = file_name.decode('utf-8')
            except UnicodeDecodeError:
                file_name = file_name.decode('gbk')
            os.mkdir(os.path.join(unzip_dir, file_name))
        else:
            # try:
            ext_filename = os.path.join(unzip_dir, file_name)
            # except UnicodeDecodeError:
            #     ext_filename = os.path.join(unzip_dir, file_name.decode('gbk'))
            ext_filedir = os.path.dirname(ext_filename)
            if not os.path.exists(ext_filedir):
                os.mkdir(ext_filedir)
            data = zfobj.read(file_name)
            with open(ext_filename, 'w') as f:
                f.write(data)
    zfobj.close()

'''将名称相同的shp压缩成zip
params /root/Documents/dataseeds/lhkrail_shp/grailn
return /root/Documents/dataseeds/lhkrail_shp/grailn.zip
'''
def zip_shp(shp_full_path):
    fileNameNoSuffix = shp_full_path.rsplit('/',1)[1]
    print fileNameNoSuffix
    # 删除旧文件
    if os.path.isfile(shp_full_path+'.zip'):
        os.remove(shp_full_path+'.zip')
    # 创建新压缩文件
    fileListZipping = []
    possileFilesList = ['.shp','.shx','.dbf','.prj','.sbn','.sbx','.xml','fbn','fbx','ain','.shp.xml']
    with zipfile.ZipFile(shp_full_path+'.zip', 'w') as myzip:
        for suffix in possileFilesList:
            possibleFile = shp_full_path+suffix
            if os.path.isfile(possibleFile):
                # fileListZipping.append(possibleFile)
                myzip.write(possibleFile,possibleFile.rsplit('/',1)[1])
                print possibleFile
    myzip.close()
        # print 'file counts is'

    '''备用
    '''
    def unzipShp(file_path):
        filePath=file_path
        fileName = file_path.rsplit('/',1)
        zip_file = zipfile.ZipFile(filePath)
        # 默认解压到当前脚本执行目录
        # zip_file.extractall()
        # 解压到指定目录，不存在则新建
        # zip_file.extractall('/opt/opt')
        #  if os.path.isdir(file_name + "_shp"):
        #     pass
        # else:
        #     os.mkdir(file_name + "_shp")
        for name in zip_file.namelist():
            # zip_file.extract(name,file_name + "_files/")
            print name
        zip_file.close()

if __name__ == '__main__':
    # zipFilePath=u'/opt/tempx/bou2_4m.zip'
    # zipFilePath=u'/root/Documents/dataseeds/老河口poicopy_shp/老河口poicopy.zip'
    zipFilePath=u'/root/Documents/dataseeds/lhkrail.zip'
    fFullName=u'/root/Documents/dataseeds/lhkrail_shp/grailn'
    # fFullName=u'/root/Documents/dataseeds/老河口poicopy_shp/老河口poicopy'
    # unzipShp(zipFilePath)
    # unzip_shp(zipFilePath)
    # zip_shp(fFullName)
