# Given an array of integers nums, 
# a lucky integer is an integer which has a frequency in the array equal to its value.
# Return a lucky integer in the array. If there are multiple lucky integers return the largest of them. If there is no lucky integer return -1.
# Example 1:
# Input: nums = [2,2,3,4]					
# Output: 2
# Explanation: The only lucky number in the array is 2 because frequency[2] == 2.
# Example 2:
# Input: nums = [1,2,2,3,3,3]
# Output: 3
# Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.

#lucky number
#value == occurance
#no lucky number -1
#return largest if there are multiple else return the single one

#array for lucky numbers
#max(arr)[0]
#count array for values

def solution(arr):
    lucky_numbers = []
    for c in arr:
        if arr.count(c) == c:
            lucky_numbers.append(c)
    return -1 if len(lucky_numbers) == 0 else max(lucky_numbers)

from collections import Counter
def solution(arr):
    
    arr2 = Counter(arr)
    lucky_numbers = [val for val in arr2.values() if val == key]
    return -1 if len(lucky_numbers) == 0 else max(lucky_numbers)