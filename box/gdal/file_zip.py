# _*_ coding: utf-8 _*_

import zipfile
import os.path
import os


def unzipShp(file_path):
    filePath=file_path
    zfile = zipfile.ZipFile(filePath)
    for name in zfile.namelist():
        (dirname, filename) = os.path.split(name)
        print "Decompressing " + filename + " on " + dirname
        # if not os.path.exists(dirname):
        #     os.makedirs(dirname)
        # zfile.extract(name, dirname)

if __name__ == '__main__':
    zipFilePath=u'/opt/tempx/bou2_4m.zip'
    unzipShp(zipFilePath)
