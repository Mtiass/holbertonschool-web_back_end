#!/bin/usr/env python3
"""
Function that changes all topics of a school document based on the name.
"""


def update_topics(mongo_collection, name, topics):
    """
    mongo_collection will be the pymongo collection object
    name (string) will be the school name to update
    topics (list of strings) will be the list of topics approached in school
    """
    mongo_collection.update_many({"name": name}, {"$set": {"topics": topics}})
