#!/bin/usr/env python3
"""
Taks
"""
import asyncio
from typing import List


wait_random = __import__('0-basic_async_syntax').wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Returns the list of all the delays (float values).
    """
    delays = []
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)
    return delays
