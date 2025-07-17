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
        src="https://s3.amazonaws.com/upload.uxpin/files/1373907/1320082/Logo-81f95b7390b28bad143414b2da43617d-708c8e.PNG"
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
              Estabelecimentos
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
            title="Estabelecimentos"
            extra={
              <Icon
                icon="MoreOutlined"
              />
            }
          >
            <Input
              placeholder="Filtre por nome do estabelecimento, CNPJ, endereço ou cidade"
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
              dataSource={[ { key: "1", "cnpj-cpf": "12.151.422/0001-55", nome: "Supermercado Gaste Menos", endereco: "RUA 4A, 1560 - Vicente Pires", cidade: "Brasília", uf: "DF" }, { key: "2", "cnpj-cpf": "51.467.857/0001-80", nome: "Farmácia Pague Menos", endereco: "Quadra 107, 850 - Asa Sul", cidade: "Brasília", uf: "DF" }, { key: "3", "cnpj-cpf": "41.121.004/0001-72", nome: "Pet Shop Caramelo", endereco: "Rua 36 norte, 3500 - Águas Claras", cidade: "Brasília", uf: "DF" }, { key: "4", "cnpj-cpf": "10.421.452/0001-60", nome: "Supermercado Tauste Ltda", endereco: "Avenida Tiradentes, 1131", cidade: "Marília", uf: "SP" }, { key: "5", "cnpj-cpf": "12.432.564/0001-40", nome: "Confiança Supermercados", endereco: "Rua. Dr. Thimo Bruno Belucci, 255 - Jardim Aquarius", cidade: "Marília", uf: "SP" } ]}
              columns={[ { title: "CNPJ/CPF", dataIndex: "cnpj-cpf", key: "cnpj-cpf" }, { title: "NOME", dataIndex: "nome", key: "nome" }, { title: "ENDEREÇO", dataIndex: "endereco", key: "endereco" }, { title: "CIDADE", dataIndex: "cidade", key: "cidade" }, { title: "UF", dataIndex: "uf", key: "uf" }, { title: " ", dataIndex: "editar-produto", key: "editar-produto" }, { title: " ", dataIndex: "excluir-produto", key: "excluir-produto" } ]}
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