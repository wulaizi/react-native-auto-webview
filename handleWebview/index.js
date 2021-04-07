/*
 * @Author: your name
 * @Date: 2020-06-11 22:17:21
 * @LastEditTime: 2021-04-07 13:35:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-native-android-fullscreen-webview-video-master/handleWebview/index.js
 */
import { Platform } from 'react-native';
import androidWebView from './androidWebView';
import iosWebView from './iosWebView';

const CustomWebView = Platform.OS === 'ios' ? iosWebView : androidWebView;

module.exports = CustomWebView;
