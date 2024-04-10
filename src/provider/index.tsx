import { Outlet } from 'umi';
import { Provider } from 'react-redux'
import { reduxStore, persistor } from '@/Redux';
import ModalProvider from '@/provider/modalProvider';
import { PersistGate } from 'redux-persist/integration/react';
import { ReactQueryProvider } from '@/provider/ReactQueryProvider';
import { ToastContainer } from 'react-toastify';
import Footer from '@/components/footer';
import antd from 'antd/lib/locale/zh_CN'; // 引入中文语言包
import { ConfigProvider } from 'antd';
export default function ProviderConfig() {
  return (
    <ConfigProvider locale={antd}>
      <Provider store={reduxStore}>
        <PersistGate loading={null} persistor={persistor}>
          <ReactQueryProvider>
            <ModalProvider>
              <Outlet/>
              <Footer/>
              <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                className={'toastContent'}
                theme="colored"
              />
            </ModalProvider>
          </ReactQueryProvider>
        </PersistGate>
      </Provider>
      </ConfigProvider>
  );
}