
def get_size_nice_str(sizeInBytes):
    """
    Convert the given byteCount into a string like: 9.9bytes/KB/MB/GB
    """
    for (cutoff, label) in [(1024*1024*1024, "GB"),
                            (1024*1024, "MB"),
                            (1024, "KB"),
                            ]:
        if sizeInBytes >= cutoff:
            return "%.1f %s" % (sizeInBytes * 1.0 / cutoff, label)

    if sizeInBytes == 1:
        return "1 byte"
    else:
        bytes = "%.1f" % (sizeInBytes or 0,)
        return (bytes[:-2] if bytes.endswith('.0') else bytes) + ' bytes'


if __name__ == '__main__':
    fSize = 102400
    print get_size_nice_str(fSize)
