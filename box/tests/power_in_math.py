#! /usr/bin/env python
# _*_ coding: utf-8 _*_


def power_x_y(x,y):
    result=1
    # for i in range(1,(y+1)):
    #     result = result*x

    i=1;
    while i <= y:
        result = result*x;
        i = i+1;

    return result


if __name__ == '__main__':
    a,b = raw_input('请输入底数和指数：').split()
    print power_x_y(int(a),int(b))
