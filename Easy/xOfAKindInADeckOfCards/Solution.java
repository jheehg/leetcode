package xOfAKindInADeckOfCards;

class Solution {
    public boolean hasGroupsSizeX(int[] deck) {
        // 1) 하나만 있을 경우
        if(deck.length < 2) return false;

        // 2) 중복된 숫자 건수 확인
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i : deck) {
            map.put(i, map.getOrDefault(i, 0) + 1);
        }

        ArrayList<Integer> mm = new ArrayList<>();
        for(int i : map.values()) mm.add(i);
        mm.sort(null);

        int i = 2, max = mm.get(mm.size()-1);
        boolean result = false;

        // 3) 최소값 2부터 max값까지 나눴을때 나머지 0인 경우
        while(i <= max) {
            for(int j=0; j<mm.size(); j++) {
                if(mm.get(j) % i != 0) { result = false; break; }
                if(mm.get(j) % i == 0) {
                    result = true;
                    if(j == mm.size()-1) return true;
                }
            }
            i++;
        }
        return result;
    }
}