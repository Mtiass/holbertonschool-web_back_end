#!/usr/bin/env python3
"""Function that inserts a new document in a collection based on kwargs."""


def insert_school(mongo_collection, **kwargs):
    """mongo_collection will be the pymongo collection object"""
    dc_id = mongo_collection.insert(kwargs)
    return dc_id
