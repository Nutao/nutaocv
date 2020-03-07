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
            '        <p>本项目主要从事招行PaaS容器平台（Kubernetes）的运维研发，专注于K8S的部署和CI/CD问题的解决。具体如下：</p>\n' +
            '        <p>1，设计了招行两地三中心（多AZ）容器平台的架构和部署实施方案。\n' +
            '        <p>2，负责Kubernetes ansible批量部署工具和运维工具研发。\n' +
            '        <p>3，设计并实施了容器平台存储方案(GlusterFS)。\n' +
            '        <p>4，协助招行应用全面上云的方案落地，制定开发人员应用迁移上云的解决方案。' +
            '<\/div>'
    });
});


$('figure.fqdn').on('click', function(){
    layer.open({
        type: 1, title: '本人贡献',
        skin: 'layui-layer-molv',
        shadeClose: true, //点击遮罩关闭
        content: '\<\div style="padding:10px;"><img class="img-responsive" src="assets/images/portfolio/dns.png" alt="" /> <\/div>'
    });
});

