import React from 'react';
import { Badge } from 'antd';
import { Breadcrumb } from 'antd';
import { Button } from 'antd';
import { Card } from 'antd';
import { Col } from 'antd';
import { Divider } from 'antd';
import { Dropdown } from 'antd';
import * as Icons from '@ant-design/icons';
import { Image } from 'antd';
import { Input } from 'antd';
import { Layout } from 'antd';
import { Menu } from 'antd';
import { Row } from 'antd';
import { Space } from 'antd';
import { Table } from 'antd';
import { Tag } from 'antd';
import { Typography } from 'antd';

function Icon(props) {
      return React.createElement(Icons[props.icon], { ...props });
    }


export default function UXPinLayout() {

const [collapsed, setCollapsed] = React.useState(false);
const [selectedKeys, setSelectedKeys] = React.useState(["i","t","e","m","-","1"]);
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
        src="https://s3.amazonaws.com/upload.uxpin/files/1373907/1320082/Logo-81f95b7390b28bad143414b2da43617d-255fc0.PNG"
        width={130}
        preview={true}
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
              Despesas
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
            title="Despesas"
            extra={
              <Icon
                icon="MoreOutlined"
              />
            }
          >
            <Input
              placeholder="Consulte por data, estabelecimento, valor ou categoria"
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
              dataSource={[ { key: "1", data: "24/04/2025", estabelecimento: "Supermercado Gaste Menos", valor: "R$ 825,12", pagamento: "Crédito", categoria: <Tag color="success">Alimentação</Tag> }, { key: "2", data: "21/04/2025", estabelecimento: "Farmácia Pague Menos", valor: "R$ 122,14", pagamento: "Crédito", categoria: <Tag color="processing">Saúde</Tag> }, { key: "3", data: "18/04/2025", estabelecimento: "Pet Shop Caramelo", valor: "R$ 125,00", pagamento: "Pix", categoria: <Tag color="error">Pet</Tag> }, { key: "4", data: "15/04/2025", estabelecimento: "Supermercado Tauste", valor: "R$ 157,50", pagamento: "Débito", categoria: <Tag color="success">Alimentação</Tag> }, { key: "5", data: "14/04/2025", estabelecimento: "Supermercados Confiança", valor: "R$ 189,35", pagamento: "Crédito", categoria: <Tag color="success">Alimentação</Tag> } ]}
              columns={[ { title: "DATA", dataIndex: "data", key: "data" }, { title: "ESTABELECIMENTO", dataIndex: "estabelecimento", key: "estabelecimento" }, { title: "VALOR", dataIndex: "valor", key: "valor" }, { title: "PAGAMENTO", dataIndex: "pagamento", key: "pagamento" }, { title: "CATEGORIA", dataIndex: "categoria", key: "categoria" }, { title: " ", dataIndex: "editar-despesa", key: "editar-despesa" } ]}
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