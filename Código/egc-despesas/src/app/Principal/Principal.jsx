import React from 'react';
import { Badge } from 'antd';
import { BarChart } from '@mui/x-charts/BarChart';
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


export default function Principal() {

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
        src="https://s3.amazonaws.com/upload.uxpin/files/1373907/1320082/Logo-81f95b7390b28bad143414b2da43617d-1bf536.PNG"
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
                    code={true}
                  >
                    5
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
                  Quantidade de despesas no mês
                
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
                    R$ 1.419,11
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
                  Valor gasto no mês
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
                    Crédito
                  </Typography.Title>
                </Space>
                <Typography.Text
                  type="secondary"
                  strong={true}
                >
                  Pagamento mais utilizado
                </Typography.Text>
              </Col>
              <Col
                xs={6}
                style={{ textAlign: "center" }}
              >
                <Icon
                  icon="CreditCardOutlined"
                  style={{ fontSize: "60px", color: "#1890ff" }}
                />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col
          xs={24}
          md={14}
          xl={15}
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
              columns={[ { title: "DATA", dataIndex: "data", key: "data" }, { title: "ESTABELECIMENTO", dataIndex: "estabelecimento", key: "estabelecimento" }, { title: "VALOR", dataIndex: "valor", key: "valor" }, { title: "PAGAMENTO", dataIndex: "pagamento", key: "pagamento" }, { title: "CATEGORIA", dataIndex: "categoria", key: "categoria" } ]}
              scroll={{  }}
            />
          </Card>
        </Col>
        <Col
          xs={24}
          md={10}
          xl={9}
        >
          <Card
            style={{ height: "100%" }}
          >
            <Typography.Title
              level={4}
              style={{ marginTop: 0, marginBottom: "20px" }}
              disabled={false}
            >
              Valores gastos por categoria
            </Typography.Title>
            <BarChart
              xAxis={[ { scaleType: "band", data: [ "Aliment.", "Saúde", "Educação", "Lazer", "Transporte", "Pet" ] } ]}
              series={[ { data: [ "9", "6", "5", "2", "1", "1" ] } ]}
              height={400}
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