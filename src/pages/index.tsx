/*
 * @Describe: 
 * @Date: 2023-02-23 18:37:07
 * @LastEditors: Cosima
 * @LastEditTime: 2023-04-06 15:22:47
 * @FilePath: \umi-test\src\pages\index.tsx
 */
import styles from './index.less';
import { useEffect } from 'react'
import { request } from 'umi';
import zidingyineirongshuju from '@/services/umi-dome';

export default function IndexPage() {
  useEffect(() => {
    console.log(zidingyineirongshuju, 'addUsingPOST');
    zidingyineirongshuju.zidingyineirongshuju.addUsingPOST().catch(err => console.log(err))
  })
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
