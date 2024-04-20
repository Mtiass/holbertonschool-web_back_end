#!/usr/bin/env python3
"""
Simple helper function
"""


def index_range(page, page_size):
    """
    Function that takes two integer arg.
    """
    start_in = (page - 1) * page_size
    end_in = page * page_size
    return start_in, end_in
