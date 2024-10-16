# Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

# Write a function which takes a list of strings and returns each line prepended by the correct number.

# The numbering starts at 1. The format is n: string. Notice the colon and space in between.

# Examples: (Input --> Output)

# [] --> []
# ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]


# My Python Solution 

def number(lines):
    return [f"{i+1}: {ch}" for i, ch in enumerate(lines)]

# Code Wars Alternatives

def number(lines):
  return ['%d: %s' % v for v in enumerate(lines, 1)]

# Or

def number(lines):
    return [f"{counter}: {line}" for counter, line in enumerate(lines, start=1)]
