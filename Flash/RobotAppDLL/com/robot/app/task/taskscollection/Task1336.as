package com.robot.app.task.taskscollection
{
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.RectangleMask;
   import flash.geom.Rectangle;
   
   public class Task1336
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _status:uint;
       
      
      public function Task1336()
      {
         super();
      }
      
      public static function initFor362(param1:BaseMapProcess) : void
      {
         _map = param1;
         _status = TasksManager.getTaskStatus(1336);
         if(_status != TasksManager.COMPLETE)
         {
            step0();
         }
      }
      
      private static function step0() : void
      {
         PetManager.upDate(function():void
         {
            NpcDialog.show(NPC.DOCTOR,["才一会儿不见，你就拥有这么多新精灵伙伴了。哈哈，了不起。"],["博士，什么是精灵收集计划？"],[function():void
            {
               var str:* = undefined;
               if(Boolean(PetManager.containsBagForID(1)) || Boolean(PetManager.containsBagForID(2)) || Boolean(PetManager.containsBagForID(3)) || Boolean(PetManager.containsStorageForID(1)) || Boolean(PetManager.containsStorageForID(2)) || Boolean(PetManager.containsStorageForID(3)))
               {
                  str = "伊优或小火猴";
               }
               else if(Boolean(PetManager.containsBagForID(4)) || Boolean(PetManager.containsBagForID(5)) || Boolean(PetManager.containsBagForID(6)) || Boolean(PetManager.containsStorageForID(4)) || Boolean(PetManager.containsStorageForID(5)) || Boolean(PetManager.containsStorageForID(6)))
               {
                  str = "布布种子或小火猴";
               }
               else if(Boolean(PetManager.containsBagForID(7)) || Boolean(PetManager.containsBagForID(8)) || Boolean(PetManager.containsBagForID(9)) || Boolean(PetManager.containsStorageForID(7)) || Boolean(PetManager.containsStorageForID(8)) || Boolean(PetManager.containsStorageForID(9)))
               {
                  str = "布布种子或伊优";
               }
               NpcDialog.show(NPC.DOCTOR,["你已经听说我的精灵收集计划了？点击右下角的装置，开始你的精灵收集之旅吧。悄悄告诉你，通过精灵收集计划，能得到" + str + "哦。"],["真的吗？太好了！我要拿到全部三只主宠！"],[function():void
               {
                  RectangleMask.mask(new Rectangle(710,410,115,110));
               }]);
            }]);
         });
      }
   }
}
