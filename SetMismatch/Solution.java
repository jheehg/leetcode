class Solution {
    public int[] findErrorNums(int[] nums) {
        // 모든 정수를 다 더한 합 (정상적인 경우)
        int total = 0;
        for(int i=1; i<=nums.length; i++) total+=i;

        HashMap<Integer, Integer> map = new HashMap<>();
        // 중복된 숫자 확인, 합계에서 다 뺀 후 중복된 숫자는 마지막에 다시 더하기
        int dup = 0;
        for(int i=0; i<nums.length; i++) {
            total-=nums[i];
            int val = map.getOrDefault(nums[i], 0);
            map.put(nums[i], val + 1);
            if(val == 1) dup = nums[i];
        }

        return new int[]{dup, total + dup};
    }
}
