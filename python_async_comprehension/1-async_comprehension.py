#!/usr/bin/env python3
"""
Async coroutine.
"""
import asyncio
from typing import List


async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    aync couroutine that takes and returns a list of 10 random float numbers.
    """
    random_list = []
    async for num in async_generator():
        random_list.append(num)
    return random_list
