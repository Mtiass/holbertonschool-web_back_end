#!/usr/bin/env python3
"""
Let's duck type an iterable object
"""


def element_length(lst):
    """
    Annotate the below function’s parameters and return values
    with the appropriate types
    """
    return [(i, len(i)) for i in lst]
