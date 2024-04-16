#!/usr/bin/env python3
"""
coroutine that will execute async_comprehension four times in parallel
using asyncio.gather
"""
import asyncio


async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime():
    """
    Async couroutine func.
    """
    start = asyncio.get_event_loop().time()
    await asyncio.gather(
            async_comprehension(), async_comprehension(),
            async_comprehension(), async_comprehension()
            )
    end = asyncio.get_event_loop().time()
    return end - start  # total
