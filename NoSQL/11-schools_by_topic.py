#!/usr/bin/env python3
"""Function that returns the list of school having a specific topic."""


def schools_by_topic(mongo_collection, topic):
    """
    mongo_collection will be the pymongo collection object
    topic (string) will be topic searched
    """
    if not isinstance(topic, str):
        topic = str(topic)
    query = {"topic": topic}
    listdocs = list(mongo_collection.find(query))
    return listdocs
