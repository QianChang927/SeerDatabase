package com.robot.core.net
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.SkillXMLInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.info.pet.PetSkillInfo;
   import com.robot.core.manager.PetManager;
   import org.taomee.bean.BaseBean;
   import org.taomee.manager.ResourceManager;
   
   public class BefLoad extends BaseBean
   {
       
      
      public function BefLoad()
      {
         super();
      }
      
      override public function start() : void
      {
         var _loc2_:PetInfo = null;
         var _loc3_:Array = null;
         var _loc4_:PetSkillInfo = null;
         var _loc5_:String = null;
         var _loc1_:Array = PetManager.infos;
         for each(_loc2_ in _loc1_)
         {
            ResourceManager.addBef(ClientConfig.getResPath("fightResource/pet/swf/" + _loc2_.id.toString() + ".swf"),"pet",false);
            ResourceManager.addBef(ClientConfig.getResPath("groupFightResource/pet/" + _loc2_.id + ".swf"),"pet",false);
            _loc3_ = _loc2_.skillArray;
            for each(_loc4_ in _loc3_)
            {
               ResourceManager.addBef(ClientConfig.getResPath("fightResource/skill/swf/" + _loc4_.id.toString() + ".swf"),"skill",false);
               _loc5_ = SkillXMLInfo.getGpFtSkillMC(_loc4_.id);
               ResourceManager.addBef(ClientConfig.getResPath("groupFightResource/skill/" + _loc5_ + ".swf"),"skill",false);
            }
         }
         finish();
      }
   }
}
