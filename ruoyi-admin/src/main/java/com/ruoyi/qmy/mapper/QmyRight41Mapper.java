package com.ruoyi.qmy.mapper;

import java.util.List;
import com.ruoyi.qmy.domain.QmyRight41;

/**
 * 销售统计Mapper接口
 * 
 * @author 孙少聪
 * @date 2022-04-06
 */
public interface QmyRight41Mapper 
{
    /**
     * 查询销售统计
     * 
     * @param id 销售统计主键
     * @return 销售统计
     */
    public QmyRight41 selectQmyRight41ById(Long id);

    /**
     * 查询销售统计列表
     * 
     * @param qmyRight41 销售统计
     * @return 销售统计集合
     */
    public List<QmyRight41> selectQmyRight41List(QmyRight41 qmyRight41);

    /**
     * 新增销售统计
     * 
     * @param qmyRight41 销售统计
     * @return 结果
     */
    public int insertQmyRight41(QmyRight41 qmyRight41);

    /**
     * 修改销售统计
     * 
     * @param qmyRight41 销售统计
     * @return 结果
     */
    public int updateQmyRight41(QmyRight41 qmyRight41);

    /**
     * 删除销售统计
     * 
     * @param id 销售统计主键
     * @return 结果
     */
    public int deleteQmyRight41ById(Long id);

    /**
     * 批量删除销售统计
     * 
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteQmyRight41ByIds(Long[] ids);
}
