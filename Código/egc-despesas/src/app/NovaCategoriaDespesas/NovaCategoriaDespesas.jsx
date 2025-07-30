import React from 'react';
import { Badge } from 'antd';
import { Breadcrumb } from 'antd';
import { Button } from 'antd';
import { Col } from 'antd';
import { Divider } from 'antd';
import { Dropdown } from 'antd';
import { Form } from 'antd';
import * as Icons from '@ant-design/icons';
import { Image } from 'antd';
import { Input } from 'antd';
import { Layout } from 'antd';
import { Menu } from 'antd';
import { Row } from 'antd';
import { Space } from 'antd';
import { Typography } from 'antd';

function Icon(props) {
      return React.createElement(Icons[props.icon], { ...props });
    }


export default function NovaCategoriaDespesas() {

const [collapsed, setCollapsed] = React.useState(false);
const [selectedKeys, setSelectedKeys] = React.useState(["i","t","e","m","-","1"]);
const [value, setValue] = React.useState(undefined);
const [value2, setValue2] = React.useState('Saúde');
const [value4, setValue4] = React.useState('Despesas com mensalidades escolares, cursos de idiomas, livros e cursos extras.');

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
        src="https://s3.amazonaws.com/upload.uxpin/files/1373907/1320082/Logo-81f95b7390b28bad143414b2da43617d-8701be.PNG"
        width={130}
      />
    </Col>
    <Menu
      mode="inline"
      theme="dark"
      selectedKeys={selectedKeys}
      onSelect={(...args) => { let selectedKeys = args[0].selectedKeys; setSelectedKeys(selectedKeys); }}
    >
      <Menu.Item
        key="despesas"
        label="Despesas"
        icon={
          <Icon
            icon="CalculatorOutlined"
          />
        }
      >
        Despesas
      </Menu.Item>
      <Menu.Item
        key="estabelecimentos"
        label="Estabelecimentos"
        icon={
          <Icon
            icon="BankOutlined"
          />
        }
      >
        Estabelecimentos
      </Menu.Item>
      <Menu.Item
        key="produtos"
        label="Produtos"
        icon={
          <Icon
            icon="ShopOutlined"
          />
        }
      >
        Produtos
      </Menu.Item>
      <Menu.Item
        key="categorias"
        label="Categorias"
        disabled={true}
        icon={
          <Icon
            icon="DatabaseOutlined"
          />
        }
      >
        Categorias despesas
      </Menu.Item>
      <Menu.Item
        key="financeiro"
        label="Financeiro"
        icon={
          <Icon
            icon="DollarCircleOutlined"
          />
        }
      >
        Financeiro
      </Menu.Item>
      <Menu.Item
        key="deducaoIR"
        label="Dedução IR"
        icon={
          <Icon
            icon="CalendarOutlined"
          />
        }
      >
        Dedução IR
      </Menu.Item>
      <Divider />
      <Menu.Item
        key="ajuda"
        label="Ajuda"
        icon={
          <Icon
            icon="MailOutlined"
          />
        }
      >
        Ajuda
      </Menu.Item>
    </Menu>
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
              Categorias de despesas
            </Typography.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Typography.Link
              href="#/"
            >
              Nova categoria de despesas
            </Typography.Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Space>
    </Layout.Content>
    <Row
      gutter={[ 16, 16 ]}
      justify="center"
    >
      <Col
        xs={24}
        sm={12}
      >
        <Form
          layout="horizontal"
          style={{ padding: "24px", maxWidth: "600px" }}
        >
          <Typography.Title
            level={4}
          >
            Categoria de despesas
          </Typography.Title>
          <Divider />
          <Form.Item
            label="Código da categoria de despesa"
          >
            <Input
              placeholder="18"
              disabled={true}
              value={value}
              onChange={(...args) => { let value = args[0].target.value; setValue(value); }}
            />
          </Form.Item>
          <Form.Item
            label="Nome da categoria de despesa"
          >
            <Input
              placeholder="Educação"
              value={value2}
              onChange={(...args) => { let value2 = args[0].target.value; setValue2(value2); }}
            />
          </Form.Item>
          <Form.Item
            label="Descrição da categoria de despesa"
          >
            <Input
              placeholder=""
              size="middle"
              type="text"
              value={value4}
              onChange={(...args) => { let value4 = args[0].target.value; setValue4(value4); }}
            />
          </Form.Item>
          <Form.Item>
            <div
              style={{ display: "flex", gap: "20px" }}
            >
              <Button
                type="primary"
              >
                Cadastrar
              </Button>
              <Button>
                Cancelar
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  </Layout>
</Layout>);
}