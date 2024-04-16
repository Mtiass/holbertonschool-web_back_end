#!/bin/usr/env python3
"""
asynchronous coroutine that takes in an int arg that waits
for a random delay between 0 and max_delay seconds
and eventually returns it.
"""
import asyncio
import random


async def wait_random(max_delay: int = 10)-> float:
    """
    asynchronous coruotine
    """
    delay = random.uniform(0, max_delay)
    
    await asyncio.sleep(delay)

    return delay
