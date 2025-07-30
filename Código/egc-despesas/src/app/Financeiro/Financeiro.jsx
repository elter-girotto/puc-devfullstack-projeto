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


export default function Financeiro() {

const [collapsed, setCollapsed] = React.useState(false);
const [selectedKeys, setSelectedKeys] = React.useState(["i","t","e","m","-","1"]);
const [visible, setVisible] = React.useState(false);
const [visible2, setVisible2] = React.useState(false);
const [visible4, setVisible4] = React.useState(false);
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
        src="https://s3.amazonaws.com/upload.uxpin/files/1373907/1320082/Logo-81f95b7390b28bad143414b2da43617d-5683b9.PNG"
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
        disabled={true}
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
              Financeiro
            </Typography.Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Space>
      <Row
        gutter={[ 16, 16 ]}
      >
        <Col
          xs={24}
          xl={8}
          md={12}
        >
          <Card
            style={{ height: "100%" }}
          >
            <Row
              justify="space-between"
            >
              <Col>
                <Space
                  size="small"
                  align="baseline"
                >
                  <Typography.Title
                    level={3}
                    style={{ margin: 0 }}
                    mark={true}
                    code={false}
                  >
                    R$ 5.890,00
                  </Typography.Title>
                  <Typography.Text
                    type="success"
                    strong={true}
                    ellipsis={true}
                  >
                    +30%
                  </Typography.Text>
                </Space>
                <Typography.Text
                  type="secondary"
                  strong={true}
                >
                  Total a vencer
                
                </Typography.Text>
              </Col>
              <Col
                xs={6}
                style={{ textAlign: "center" }}
              >
                <Icon
                  icon="DollarCircleFilled"
                  style={{ fontSize: "60px", color: "#1890ff" }}
                />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col
          xs={24}
          md={12}
          xl={8}
        >
          <Card
            style={{ height: "100%" }}
          >
            <Row>
              <Col
                xs={18}
              >
                <Space
                  size="small"
                  align="baseline"
                >
                  <Typography.Title
                    level={3}
                    style={{ margin: 0 }}
                  >
                    R$ 2.870,00
                  </Typography.Title>
                  <Typography.Text
                    type="success"
                    strong={true}
                  >
                    +20%
                  </Typography.Text>
                </Space>
                <Typography.Text
                  type="secondary"
                  strong={true}
                >
                  Total à vista a vencer
                </Typography.Text>
              </Col>
              <Col
                xs={6}
                style={{ textAlign: "center" }}
              >
                <Icon
                  icon="DollarCircleOutlined"
                  style={{ fontSize: "60px", color: "#1890ff" }}
                />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col
          xs={24}
          md={12}
          xl={8}
        >
          <Card
            style={{ height: "100%" }}
          >
            <Row>
              <Col
                xs={18}
              >
                <Space
                  size="small"
                  align="baseline"
                >
                  <Typography.Title
                    level={3}
                    style={{ margin: 0 }}
                  >
                    R$ 3.020,00
                  </Typography.Title>
                </Space>
                <Typography.Text
                  type="secondary"
                  strong={true}
                >
                  Total a prazo a vencer
                </Typography.Text>
              </Col>
              <Col
                xs={6}
                style={{ textAlign: "center" }}
              >
                <Icon
                  icon="CalendarOutlined"
                  style={{ fontSize: "60px", color: "#1890ff" }}
                />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col
          xs={24}
          md={14}
          xl={24}
        >
          <Card
            title="Financeiro"
            extra={
              <Icon
                icon="MoreOutlined"
              />
            }
          >
            <Input
              placeholder="Filtre despesas por data, estabelecimento, valor, vencimento, tipo de pagamento e parcelamento"
              style={{ width: "800px" }}
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
              dataSource={[ { key: "1", data: "24/04/2025", estabelecimento: "Supermercado Gaste Menos", valor: "R$ 825,12", vencimento: "25/05/2025", pagamento: "Crédito", parcelamento: <Tag color="success">à vista</Tag> }, { key: "2", data: "21/04/2025", estabelecimento: "Farmácia Pague Menos", valor: "R$ 122,14", vencimento: "25/05/2025", pagamento: "Crédito", parcelamento: <Tag color="processing">parcelado</Tag> }, { key: "3", data: "18/04/2025", estabelecimento: "Pet Shop Caramelo", valor: "R$ 125,00", vencimento: "18/04/2025", pagamento: "Pix", parcelamento: <Tag color="success">à vista</Tag> }, { key: "4", data: "15/04/2025", estabelecimento: "Supermercado Tauste", valor: "R$ 157,50", vencimento: "15/04/2025", pagamento: "Débito", parcelamento: <Tag color="success">à vista</Tag> }, { key: "5", data: "14/04/2025", estabelecimento: "Supermercados Confiança", valor: "R$ 189,35", vencimento: "25/05/2025", pagamento: "Crédito", parcelamento: <Tag color="processing">parcelado</Tag> } ]}
              columns={[ { title: "DATA", dataIndex: "data", key: "data" }, { title: "ESTABELECIMENTO", dataIndex: "estabelecimento", key: "estabelecimento" }, { title: "VALOR", dataIndex: "valor", key: "valor" }, { title: "VENCIMENTO", dataIndex: "vencimento", key: "vencimento" }, { title: "PAGAMENTO", dataIndex: "pagamento", key: "pagamento" }, { title: "PARCELAMENTO", dataIndex: "parcelamento", key: "parcelamento" } ]}
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