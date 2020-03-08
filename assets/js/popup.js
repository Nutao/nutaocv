//弹出一个页面层
$('figure.test1').on('click', function(){
    layer.open({
        type: 1, title: '本人贡献',
        skin: 'layui-layer-molv',
        //		area: ['600px', '360px'],
        shadeClose: true, //点击遮罩关闭
        content: '\<\div style="padding:20px;"><img class="img-responsive" src="assets/images/portfolio/easyMiner.png" alt="" />项目描述：一个工业ETL平台，能够实现大规模的工业数据的抽取，清洗，转换，值映射，行列删除，记录去重，时间粒度划分以及文件自动分类合并等功能。我的主要工作如下：<p>1，设计工业大数据的分布式文件系统（HDFS+MongoDB）存储方案;<p>2，结合产品对DB的要求，使用YCSB工具对主流NoSQL（redis, mongodb, cassandra, hbase）和MySQL性能测试;<p>3，设计MongoDB ReplicatSet（三台主机）存储架构。并结合业务特点优化其配置;<p>4，探索Apache Spark和Kettle在ETL中的计算性能。</div>'
    });
});

$('figure.test2').on('click', function(){
    layer.open({
        type: 1, title: '本人贡献',
        skin: 'layui-layer-molv',
        //		area: ['600px', '360px'],
        shadeClose: true, //点击遮罩关闭
        content: '\<\div style="padding:20px;"><img class="img-responsive" src="assets/images/portfolio/patternCon.jpg" alt="" /><p>1，利用CCD每隔5秒对纱管进行拍照，并将图像数据存到数据库里面。<p>2，将进行灰度阈值分割并使用数学形态学降噪。<p>3，使用Kernel算子检测纱管边缘，编写算法确定纱管在图片中的位置，并将其精确截取。<p>4，对图像矫正，并将图像分段，依次将每段的特征与标准参数值进行比对，并实时反馈分析结果。<p><b>（此项目正在申请两项专利）<\/div>'
    });
});


$('figure.k8s-project').on('click', function(){
    layer.open({
        type: 1, title: '本人贡献',
        skin: 'layui-layer-molv',
        shadeClose: true, //点击遮罩关闭
        content: '\<\div style="padding:10px;"><img class="img-responsive" src="assets/images/portfolio/k8s.jpg" alt="" />        <p>\n' +
            '        <p>在本项目主要从事招行PaaS容器平台（Kubernetes）的运维研发，专注于K8S的部署和CI/CD问题的解决。具体如下：</p>\n' +
            '        <p>1，设计了招行两地三中心（多AZ）容器平台的架构和部署实施方案。\n' +
            '        <p>2，负责Kubernetes ansible批量部署工具和运维工具研发。\n' +
            '        <p>3，为Devops Pipline提供基于容器(DID)的编译环境和多语言编译镜像。支持自动化的CI/CD。\n' +
            '        <p>4，设计并实施了容器平台存储方案(GlusterFS)。\n' +
            '        <p>5，协助招行应用全面上云的方案落地，制定开发人员应用迁移上云的解决方案。' +
            '<\/div>'
    });
});


$('figure.dns-center').on('click', function(){
    layer.open({
        type: 1, title: '本人贡献',
        skin: 'layui-layer-molv',
        shadeClose: true, //点击遮罩关闭
        content: '\<\div style="padding:10px;"><img class="img-responsive" src="assets/images/portfolio/dns.png" alt="" />        <p> 该项目阶段性实现了招行总行域名注册及基于ClientIP的流量分发智能控制。本人在项目主导了三个迭代的开发。主要职责如下：\n' +
            '        <p>1，实现了不同网域间Domain共用时智能解析，解决了Domain划分难题。\n' +
            '        <p>2，实现了多中心PaaS容器集群中应用，能基于用户ClientIP的域名智能解析，让用户尽可能访问距离最近的应用，大大降低访问延迟。\n' +
            '        <p>3，实现了通过控制域名解析返回结果，配合集群的LB，实现流量负载均衡。且支持LB无依赖横向多实例扩展。\n' +
            '        <p>4，引入了基于ETCD的分布式锁，让流量管控中心可以在容器集群中无依赖多实例横向扩展。\n' +
            '        <p>5，实现了基于Kubernets Label-Selector机制的负载分片，将PaaS容器平台灰度发布，蓝绿发布的影响降低至亚毫秒级。\n' +
            '        <p>6，为用户提供了跨平台（Windows/Linux/Web）的域名智能解析工具。<\/div>'
    });
});


