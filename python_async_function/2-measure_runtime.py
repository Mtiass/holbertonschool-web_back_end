#!/bin/usr/env python3
"""
Measure the runtime
"""
import asyncio
import time


wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Function  that measures the total execution time.
    """
    begin = time.time()
    asyncio.run(wait_n(n, max_delay))
    end = time.time()
    return (end - begin) / n
