package com.ruoyi.productManagement.service;

import java.util.List;
import com.ruoyi.productManagement.domain.SheepHealthcare;

/**
 * 保健档案Service接口
 * 
 * @author 孙少聪
 * @date 2022-06-09
 */
public interface ISheepHealthcareService 
{
    /**
     * 查询保健档案
     * 
     * @param id 保健档案主键
     * @return 保健档案
     */
    public SheepHealthcare selectSheepHealthcareById(Long id);

    /**
     * 查询保健档案列表
     * 
     * @param sheepHealthcare 保健档案
     * @return 保健档案集合
     */
    public List<SheepHealthcare> selectSheepHealthcareList(SheepHealthcare sheepHealthcare);

    /**
     * 新增保健档案
     * 
     * @param sheepHealthcare 保健档案
     * @return 结果
     */
    public int insertSheepHealthcare(SheepHealthcare sheepHealthcare);

    /**
     * 修改保健档案
     * 
     * @param sheepHealthcare 保健档案
     * @return 结果
     */
    public int updateSheepHealthcare(SheepHealthcare sheepHealthcare);

    /**
     * 批量删除保健档案
     * 
     * @param ids 需要删除的保健档案主键集合
     * @return 结果
     */
    public int deleteSheepHealthcareByIds(Long[] ids);

    /**
     * 删除保健档案信息
     * 
     * @param id 保健档案主键
     * @return 结果
     */
    public int deleteSheepHealthcareById(Long id);
}
