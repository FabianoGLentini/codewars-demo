# You get an array of numbers, return the sum of all of the positives ones.

# Example [1,-4,7,12] => 1 + 7 + 12 = 20

# Note: if there is nothing to sum, the sum is default to 0.


# My Code Wars Solution

def positive_sum(arr):
    print(arr)
    ans = 0
    for i in arr:
        if i > 0:
            ans += i
        
    return ans

# Code Wars Alternative

def positive_sum(arr):
    return sum(x for x in arr if x > 0)

# Or

def positive_sum(arr):
    return sum(filter(lambda x: x > 0,arr))