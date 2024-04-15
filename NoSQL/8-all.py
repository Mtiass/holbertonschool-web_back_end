#!/usr/bin/env python3
"""Python function that lists all documents in a collection."""


def list_all(mongo_collection):
    """mongo_collection will be the pymongo collection object."""
    docs = list(mongo_collection.find())
    if != docs:
        empty = []
        return empty
    else:
        return docs
