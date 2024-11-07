import { memo } from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/style.scss';

const BreadcrumbComponent = (props) => {
    return (
        <div className="breadcrumb__component" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
            <div className="overlay__breadcrumb__component">
                <div className="container breadcrumb__component__container">
                    <div className="row">
                        <div className="col-xl-12">
                            <h2>{props.title}</h2>
                            <div className="breadcrumb">
                                <Breadcrumb 
                                    separator=">"
                                    items={props.items.map((item) => ({
                                    title: (
                                            <Link to={item.url} className={item.className || ''}>
                                                {item.title}
                                            </Link>
                                        )
                                    }))}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(BreadcrumbComponent);