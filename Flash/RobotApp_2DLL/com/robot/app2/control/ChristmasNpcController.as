package com.robot.app2.control
{
   import com.robot.app.mapProcess.control.HonorsHallController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.npc.NpcInfo;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.BitUtils;
   import flash.display.MovieClip;
   import flash.utils.getDefinitionByName;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class ChristmasNpcController
   {
       
      
      public function ChristmasNpcController()
      {
         super();
      }
      
      private static function showComplete(param1:int) : void
      {
         var index:int = param1;
         ItemManager.updateItems([1703086],function():void
         {
            if(ItemManager.getNumByID(1703086) <= 0)
            {
               Alert.show("你没有足够的平安夜苹果，是否去获得？",function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("ChristmasAppleGiftPanel"));
               });
            }
            else
            {
               MapObjectControl.hideOrShowAllObjects(false);
               KTool.showMapAllPlayerAndMonster(false);
               NpcController.npcVisible = false;
               ResourceManager.getResource(ClientConfig.getMapAnimate("ChristmasAnimationNpc_" + index),function(param1:MovieClip):void
               {
                  var taskMc:MovieClip = param1;
                  LevelManager.topLevel.addChild(taskMc);
                  AnimateManager.playMcAnimate(taskMc,1,"mc",function():void
                  {
                     DisplayUtil.removeForParent(taskMc);
                     SocketConnection.sendWithCallback(CommandID.CHRISMAS_THEME_ACTIVITY,function(param1:SocketEvent):void
                     {
                        var e:SocketEvent = param1;
                        ResourceManager.getResource(ClientConfig.getMapAnimate("roadToGrowthTaskComplete"),function(param1:MovieClip):void
                        {
                           var mc:MovieClip = param1;
                           LevelManager.topLevel.addChild(mc);
                           mc.x = 300;
                           mc.y = 190;
                           ModuleManager.showModule(ClientConfig.getAppModule("ChristmasAppleGiftPanel"));
                           AnimateManager.playMcAnimate(mc,0,"",function():void
                           {
                              KTool.showMapAllPlayerAndMonster(true);
                              NpcController.npcVisible = true;
                              MapObjectControl.hideOrShowAllObjects(true);
                              DisplayUtil.removeForParent(mc);
                           });
                        });
                     },index);
                  });
               });
            }
         });
      }
      
      public static function check(param1:int, param2:Function = null) : void
      {
         var index:int = 0;
         var id:int = param1;
         var fun:Function = param2;
         var npcId:Array = [1,3,2,101,103];
         index = npcId.indexOf(id);
         KTool.getMultiValue([13555],function(param1:Array):void
         {
            var _loc2_:Array = BitUtils.bitToList(int(param1[0]));
            if(fun != null)
            {
               fun(!Boolean(_loc2_[index]) && index >= 0);
            }
         });
      }
      
      public static function go(param1:Array, param2:NpcInfo) : void
      {
         var ids:Array = param1;
         var info:NpcInfo = param2;
         switch(info.npcId)
         {
            case 1:
               NpcDialog.show(NPC.SHIPER,["小赛尔，我是罗杰船长，你找我有什么事吗？"],["我要接受任务","苹果送给你！","没事"],[function():void
               {
                  var _loc1_:* = getDefinitionByName("com.robot.app.npc.taskPanel.NpcTaskPanel");
                  _loc1_.show(ids,info);
               },function():void
               {
                  showComplete(3);
               }]);
               break;
            case 2:
               NpcDialog.show(NPC.CICI,["茜茜能在赛尔号真的很快乐！#8我也希望所有的船员们也能在这里找到快乐！"],["苹果送给你！","希望茜茜能够创造出更多创意机械铠甲！"],[function():void
               {
                  showComplete(5);
               }]);
               break;
            case 3:
               NpcDialog.show(NPC.DOCTOR,["赛尔号的冒险之旅让我了解到更多精灵！精灵可是我们的伙伴！咦？我的祝福词偏题了？#7"],["苹果送给你！","哇哦！我希望能发现更多精灵伙伴！"],[function():void
               {
                  showComplete(4);
               }]);
               break;
            case 101:
               NpcDialog.show(NPC.JUSTIN,["我是贾斯汀站长，有什么需要我帮忙的吗？"],["我想了解太空站。","苹果送给你！","没什么事情。"],[function():void
               {
                  getDefinitionByName("com.robot.app2.control.BraveChallengeController").taskStart();
               },function():void
               {
                  showComplete(6);
               }]);
               break;
            case 103:
               SocketConnection.send(1020,243);
               HonorsHallController.checkState();
               MapManager.currentMap.controlLevel["guideLaoke"].stop();
               MapManager.currentMap.controlLevel["guideLaoke"].visible = false;
               NpcDialog.show(NPC.CROW,["你好，我是克罗。想要和其它赛尔一较高下吗？我会给你推荐合适的挑战哦！"],["最适合我的对抗挑战是什么？","苹果送给你！","我知道了！"],[function():void
               {
                  HonorsHallController.openPanel(2);
               },function():void
               {
                  showComplete(7);
               }]);
         }
      }
   }
}
