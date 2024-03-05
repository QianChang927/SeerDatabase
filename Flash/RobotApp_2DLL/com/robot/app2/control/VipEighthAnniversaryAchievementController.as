package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.events.MouseEvent;
   
   public class VipEighthAnniversaryAchievementController
   {
      
      private static var _map:MapModel;
      
      private static var _cureIndex:int;
       
      
      public function VipEighthAnniversaryAchievementController()
      {
         super();
      }
      
      public static function initToMap() : void
      {
         initView();
      }
      
      private static function initView() : void
      {
         _map = MapManager.currentMap;
         _map.controlLevel.addEventListener(MouseEvent.CLICK,onMainClick);
         if(_map.id == 11575)
         {
            KTool.getMultiValue([15489],function(param1:Array):void
            {
               _cureIndex = param1[0];
               _map.controlLevel["petMc"].buttonMode = true;
               _map.controlLevel["petMc"].addEventListener(MouseEvent.CLICK,onpetMcClick);
               _map.controlLevel["petMc"].gotoAndStop(_cureIndex);
            });
         }
      }
      
      private static function onpetMcClick(param1:MouseEvent) : void
      {
         Dialog2(_cureIndex - 1);
      }
      
      private static function onMainClick(param1:MouseEvent) : void
      {
         var _loc2_:int = int(KTool.getIndex(param1.target));
         switch(param1.target.name)
         {
            case "petBtn_" + _loc2_:
               Dialog(_loc2_);
         }
      }
      
      private static function Dialog(param1:int) : void
      {
         var npcArr:Array = null;
         var index:int = param1;
         npcArr = [NPC.TAOLINGLING,NPC.AKEXIYA,NPC.SHENGGUANGZHIZI,NPC.AIOULIYA,NPC.SHENGGUANGSIJIALI,NPC.SHENZHANRUIERSI,NPC.AOSILAN,NPC.YUEZHIZIQILAMEI];
         NpcDialog.show(NPC.SEER,["你好！我代表赛尔号全体船员，诚挚邀请您参加VIP八周年庆典！"],[" "],[function():void
         {
            NpcDialog.show(npcArr[index],["你好，小赛尔。转眼已经是八周年了吗，在茫茫宇宙中，对时间的流逝真的是毫无察觉呢。"],[" "],[function():void
            {
               NpcDialog.show(NPC.SEER,["是啊，当年的我还很幼稚，以为生活永远没有苦恼。在经历了这么多事情后，我更加珍稀快乐这种情感了。"],[" "],[function():void
               {
                  NpcDialog.show(NPC.SEER,["这次的庆典福利丰富，已经有很多精灵受邀前来了，您不也来一起看看吗？"],[" "],[function():void
                  {
                     NpcDialog.show(npcArr[index],["我正有此意，谢谢你的邀请！远道而来你也辛苦了，我这里有点小东西，你就收下吧！我想它一定会对你有所帮助！"],["谢谢你！"],[function():void
                     {
                        SocketConnection.sendByQueue(43275,[1,index + 1],function():void
                        {
                           MapManager.changeMapWithCallback(1,function():void
                           {
                              ModuleManager.showModule(ClientConfig.getAppModule("VipEighthAnniversaryAchievementMainPanel"),"正在打开....");
                           });
                        });
                     }]);
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function Dialog2(param1:int) : void
      {
         var npcArr:Array = null;
         var index:int = param1;
         npcArr = [NPC.XUEZHA,NPC.DOUDOU,NPC.DIYUMOZHU,NPC.HUAI_ER_TAI_PU,NPC.YINXINGCHIKE,NPC.SUERJIADE,NPC.SAILINNA,NPC.MO_LEITINGLONG,NPC.MINUO,NPC.JIANXIAOFENGGUAI];
         NpcDialog.show(NPC.SEER,["住手！你在干什么？"],[" "],[function():void
         {
            NpcDialog.show(npcArr[index],["我……我什么都没做呀。"],["  "],[function():void
            {
               NpcDialog.show(NPC.SEER,["你是要我拿出录像作为证据吗？"],["  "],[function():void
               {
                  NpcDialog.show(npcArr[index],["……可恶，快跑！"],["  "],[function():void
                  {
                     NpcDialog.show(NPC.SEER,["偷人东西是不道德的行为，你必须为自己的所作所为付出代价！"],["跑不掉了，看打！"],[function():void
                     {
                        FightManager.fightNoMapBoss("",11373 + _cureIndex - 1,false,true,function():void
                        {
                           MapManager.changeMapWithCallback(1,function():void
                           {
                              ModuleManager.showModule(ClientConfig.getAppModule("VipEighthAnniversaryAchievementCatchingThievesPanel"),"正在打开....");
                           });
                        });
                     }]);
                  }]);
               }]);
            }]);
         }]);
      }
      
      public static function destroy() : void
      {
      }
   }
}
