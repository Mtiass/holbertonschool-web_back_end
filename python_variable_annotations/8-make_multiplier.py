#!/usr/bin/env python3
"""
Complex types - functions
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Write a type-annotated function make_multiplier that takes a float
    multiplier as argument and returns a function that multiplies a float
    by multiplier.
    """
    def multip_func(number: float) -> float:
        return number * multiplier
    return multip_func
