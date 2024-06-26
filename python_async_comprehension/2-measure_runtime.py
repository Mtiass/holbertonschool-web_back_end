#!/usr/bin/env python3
"""
coroutine that will execute async_comprehension four times in parallel
using asyncio.gather
"""
import asyncio
from typing import List
import time


async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Async couroutine func.
    """
    start = time.time()
    await asyncio.gather(async_comprehension())
    end = time.time()
    total = end - start
    return total
