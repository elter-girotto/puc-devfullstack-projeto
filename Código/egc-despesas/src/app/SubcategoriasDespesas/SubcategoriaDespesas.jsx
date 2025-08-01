import React from 'react';
import { Badge } from 'antd';
import { Breadcrumb } from 'antd';
import { Button } from 'antd';
import { Card } from 'antd';
import { Col } from 'antd';
import { Dropdown } from 'antd';
import * as Icons from '@ant-design/icons';
import { Image } from 'antd';
import { Input } from 'antd';
import { Layout } from 'antd';
import { Row } from 'antd';
import { Space } from 'antd';
import { Table } from 'antd';
import { Tag } from 'antd';
import { Typography } from 'antd';
import MenuGeral from '../MenuGeral/MenuGeral';

function Icon(props) {
      return React.createElement(Icons[props.icon], { ...props });
    }


export default function SubcategoriaDespesas() {

const [collapsed, setCollapsed] = React.useState(false);
//const [selectedKeys, setSelectedKeys] = React.useState(["i","t","e","m","-","1"]);
const [value, setValue] = React.useState(undefined);

  return (<Layout
  hasSider={true}
>
  <Layout.Sider
    collapsible={true}
    breakpoint="lg"
    theme="dark"
    collapsed={collapsed}
    onCollapse={(...args) => { let collapsed = args[0]; setCollapsed(collapsed); }}
  >
    <Col
      flex={1}
      style={{ textAlign: "center", paddingTop: "100px", paddingBottom: "100px" }}
    >
      <Image
        src="https://s3.amazonaws.com/upload.uxpin/files/1373907/1320082/Logo-81f95b7390b28bad143414b2da43617d-2b9ba7.PNG"
        width={130}
      />
    </Col>
    <MenuGeral />
  </Layout.Sider>
  <Layout
    hasSider={false}
  >
    <Layout.Header
      style={{ background: "#ffffff" }}
    >
      <Row
        justify="start"
        gutter={0}
      >
        <Space
          size="middle"
          style={{ flex: 1 }}
        >
          <Button
            type="text"
            size="large"
            icon={
              <Icon
                icon="MenuOutlined"
              />
            }
            onClick={() => { setCollapsed(true); }}
          />
          <Col>
            <Typography.Title
              level={4}
              style={{ margin: "0" }}
              type="secondary"
            >
              Gerenciador de Despesas
            </Typography.Title>
          </Col>
        </Space>
        <Space
          size="small"
        >
          <Dropdown
            menu={{ items: [ { key: "1", label: "1st menu item" }, { key: "2", label: "2nd menu item" }, { key: "3", label: "Danger menu item", danger: true } ] }}
          >
            <Button
              type="text"
              icon={
                <Icon
                  icon="UserOutlined"
                />
              }
            >
              Elter Girotto
            </Button>
          </Dropdown>
          <Button
            type="dashed"
            shape="circle"
            icon={
              <Icon
                icon="SettingOutlined"
              />
            }
          />
          <Badge
            count="4"
          >
            <Button
              type="dashed"
              shape="circle"
              icon={
                <Icon
                  icon="BellOutlined"
                />
              }
            />
          </Badge>
        </Space>
      </Row>
    </Layout.Header>
    <Layout.Content>
      <Space
        size="middle"
        direction="horizontal"
        split="j"
      >
        <Breadcrumb
          style={{ marginBottom: "24px" }}
        >
          <Breadcrumb.Item>
            <Typography.Link
              href="#/"
            >
              Home
            </Typography.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Typography.Link
              href="#/"
            >
              Subcategorias de despesas
            </Typography.Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Space>
      <Row
        gutter={[ 16, 16 ]}
      >
        <Col
          xs={24}
          md={12}
          xl={8}
        />
        <Col
          xs={24}
          md={14}
          xl={24}
        >
          <Card
            title="Subcategorias de Despesas"
            extra={
              <Icon
                icon="MoreOutlined"
              />
            }
          >
            <Input
              placeholder="Filtre pela subcategoria ou categoria de despesas"
              style={{ width: "600px" }}
              readOnly={true}
              prefix={
                <Icon
                  icon="SearchOutlined"
                />
              }
              value={value}
              onChange={(...args) => { let value = args[0].target.value; setValue(value); }}
              
            />
            
            <Table
              dataSource={[ { key: "1", "subcategoria-despesa": "Açougue", "categoria-despesa": <Tag color="success">Alimentação</Tag> }, { key: "2", "subcategoria-despesa": "Combustível", "categoria-despesa": <Tag color="processing">Transporte</Tag> }, { key: "3", "subcategoria-despesa": "Farmácia", "categoria-despesa": <Tag color="error">Saúde</Tag> }, { key: "4", "subcategoria-despesa": "Hortifruti", "categoria-despesa": <Tag color="success">Alimentação</Tag> }, { key: "5", "subcategoria-despesa": "Supermercado", "categoria-despesa": <Tag color="success">Alimentação</Tag> }, { key: "6", "subcategoria-despesa": "Veterinário", "categoria-despesa": <Tag color="warning">Transporte</Tag> } ]}
              columns={[ { title: "NOME DA SUBCATEGORIA DE DESPESA", dataIndex: "subcategoria-despesa", key: "subcategoria-despesa" }, { title: "CATEGORIA DE DESPESA", dataIndex: "categoria-despesa", key: "categoria-despesa" }, { title: " ", dataIndex: "editar-categoria", key: "editar-categoria" } ]}
              scroll={{  }}
            />
          </Card>
        </Col>
        <Col
          xs={24}
          md={12}
          xl={10}
        />
      </Row>
    </Layout.Content>
    <Layout.Footer
      style={{ backgroundColor: "#ffffff" }}
    >
      <Row
        gutter={16}
        justify="space-between"
      >
        <Col>
          <Typography.Text>
            © Elter Girotto da Cruz
          </Typography.Text>
        </Col>
        <Col />
      </Row>
    </Layout.Footer>
  </Layout>
</Layout>);
}