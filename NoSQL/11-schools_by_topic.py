#!/usr/bin/env python3
"""Function that returns the list of school having a specific topic."""
import pymongo


def schools_by_topic(mongo_collection, topic):
    """
    mongo_collection will be the pymongo collection object
    topic (string) will be topic searched
    """
    query = {"topic": topic}
    schlist = []
    for sch in mongo_collection.find(query):
        schools.append(school)
    return schlist
