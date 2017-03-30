# _*_ coding: utf-8 _*_
from pypinyin import lazy_pinyin

def sort_chinese_list(list_all):
    list_all.sort(key=lambda char: lazy_pinyin(char)[0][0])
    return list_all

if __name__ == '__main__':
    list1 = [u'武汉',u'大学',u'樱花',u'节',u'人',u'很',u'多']
    list1 = sort_chinese_list(list1)
    print [lazy_pinyin(char) for char in list1]
    print list1
