import React from 'react';
import PropTypes from 'prop-types';
import { Button, Space } from 'antd';
import BookTable from 'features/Book/components/BookTable';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import BookAddForm from 'features/Book/components/BookAddForm';

MainPage.propTypes = {

};

const handleAddClick = () => {


};



function MainPage(props) {
    const { isBookFormVisible } = useSelector((state) => state.book);
    return (
        <div id='book-main-page'>
            <Space direction="vertical" style={{ width: "100%" }}>

                <div className='book-category-button--add'>
                    <Button
                        type="primary"
                        onClick={handleAddClick}
                        icon={<PlusCircleOutlined />}
                        size='mediunm'
                    >
                        Thêm bộ đề mới
                    </Button>
                </div>

                <div className="book-category-table">
                    <BookTable />
                </div>

            </Space>

            {isBookFormVisible && <BookAddForm />}

        </div>
    );
}

export default MainPage;