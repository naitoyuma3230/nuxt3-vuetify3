import type { Ref } from "vue";
export const inc = (counter: Ref<number>) => () => counter.value++;
export const dec = (counter: Ref<number>) => () => counter.value--;


export const useNotSharedCounter = () => {
	const unSharCounter = ref(0);
	return {
		unSharCounter: readonly(unSharCounter),
		unSharInc: inc(unSharCounter),
		unSharDec: dec(unSharCounter),
	};
};


export const useSharedCounter = () => {
  const counter = useState('counter', () => (0))
  return {
    counter: readonly(counter),
    dec: dec(counter),
    inc: inc(counter),
  }
}