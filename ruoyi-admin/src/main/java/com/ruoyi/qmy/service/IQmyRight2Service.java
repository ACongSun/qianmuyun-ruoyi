package com.ruoyi.qmy.service;

import java.util.List;
import com.ruoyi.qmy.domain.QmyRight2;

/**
 * 疫病监测Service接口
 * 
 * @author 孙少聪
 * @date 2022-04-06
 */
public interface IQmyRight2Service 
{
    /**
     * 查询疫病监测
     * 
     * @param id 疫病监测主键
     * @return 疫病监测
     */
    public QmyRight2 selectQmyRight2ById(Long id);

    /**
     * 查询疫病监测列表
     * 
     * @param qmyRight2 疫病监测
     * @return 疫病监测集合
     */
    public List<QmyRight2> selectQmyRight2List(QmyRight2 qmyRight2);

    /**
     * 新增疫病监测
     * 
     * @param qmyRight2 疫病监测
     * @return 结果
     */
    public int insertQmyRight2(QmyRight2 qmyRight2);

    /**
     * 修改疫病监测
     * 
     * @param qmyRight2 疫病监测
     * @return 结果
     */
    public int updateQmyRight2(QmyRight2 qmyRight2);

    /**
     * 批量删除疫病监测
     * 
     * @param ids 需要删除的疫病监测主键集合
     * @return 结果
     */
    public int deleteQmyRight2ByIds(Long[] ids);

    /**
     * 删除疫病监测信息
     * 
     * @param id 疫病监测主键
     * @return 结果
     */
    public int deleteQmyRight2ById(Long id);
}
