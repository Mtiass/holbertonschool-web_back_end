#!/bin/usr/env python3
"""aync couroutine."""
import asyncio
import random


async def wait_random(max_delay: int = 10)-> float:
    """
    asy. coroutine that waits for a random delay and eventually returns it
    """
    delay = random.uniform(0, max_delay)
    
    await asyncio.sleep(delay)

    return delay
