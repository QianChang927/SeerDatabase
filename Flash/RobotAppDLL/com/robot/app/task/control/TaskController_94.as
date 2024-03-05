package com.robot.app.task.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.InteractiveObject;
   import flash.display.MovieClip;
   
   public class TaskController_94
   {
      
      public static const TASK_ID:uint = 94;
      
      private static var icon:InteractiveObject;
      
      private static var panel:AppModel = null;
      
      private static var lightMC:MovieClip;
       
      
      public function TaskController_94()
      {
         super();
      }
      
      public static function showPanel() : void
      {
         if(panel == null)
         {
            panel = new AppModel(ClientConfig.getTaskModule("TaskPanel_94"),"正在打开任务信息");
            panel.setup();
         }
         panel.show();
      }
      
      public static function setup() : void
      {
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.CICI,["嗨！每个星球基本都会有一些富含能量的矿石哟，我们小赛尔可以用特定的工具去收集！#1采来的矿石，可以在0xff0000动力室0xffffff进行兑换到赛尔号通用的货币，那叫“赛尔豆”！"],["茜茜你能告诉我具体的收集方法么？"],[function():void
         {
            NpcDialog.show(NPC.CICI,["#8这个0xff0000挖矿钻头0xffffff就送给你吧，你可以用它来钻取星球上的一些坚硬矿石哦！"],["好也！我有挖矿钻头咯！","额？这个东西……我还是一会来拿吧！"],[function():void
            {
               TasksManager.accept(TASK_ID,function(param1:Boolean):void
               {
                  if(param1)
                  {
                  }
               });
            }]);
         }]);
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            var arr:Array = param1;
            if(Boolean(arr[0]) && !arr[1])
            {
               ItemManager.addEventListener(ItemEvent.CLOTH_LIST,function():void
               {
                  ItemManager.removeEventListener(ItemEvent.CLOTH_LIST,arguments.callee);
                  if(ItemManager.containsCloth(100055))
                  {
                     NpcDialog.show(NPC.CICI,["慢！慢！你看我，都差点忘记和你说啦……在帕诺星系一些星球上我们发现了0xff0000黄晶矿0xffffff和0xff0000甲烷燃气0xffffff的采集点，我想现在你可以去含有这些资源的星球看看！"],["你可以再说得详细些吗？"],[function():void
                     {
                        NpcDialog.show(NPC.CICI,["先装备上0xff0000挖矿钻头0xffffff，去0xff0000火山星、克洛斯星或海洋星深水区0xffffff采集0xff00005块黄晶矿0xffffff。"],["好！我这就去！采好了我再回来找你哟！"],[function():void
                        {
                           TasksManager.complete(94,1,null,true);
                        }]);
                     }]);
                  }
                  else
                  {
                     NpcDialog.show(NPC.CICI,["咦？你忘了0xff0000气体收集器0xffffff在哪里买到？#8，在机械室0xff0000赛尔工厂0xffffff，可别再忘记咯！"],["好！我这就去看看！"]);
                  }
               });
               ItemManager.getCloth();
            }
            if(Boolean(arr[1]) && !arr[2])
            {
               ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,function(param1:ItemEvent):void
               {
                  var info:SingleItemInfo;
                  var evt:ItemEvent = param1;
                  ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,arguments.callee);
                  info = ItemManager.getCollectionInfo(400001);
                  if(info != null && info.itemNum >= 5)
                  {
                     NpcDialog.show(NPC.CICI,["哎呀！不错嘛！没想到你竟然这么快就上手咯！#6那么接下来再去采集0xff00005罐甲烷燃气0xffffff吧，你有信心完成任务吗？"],["小意思！没什么可以难倒我的！我这就起程！"],[function():void
                     {
                        TasksManager.complete(94,2,null,true);
                     }]);
                  }
                  else
                  {
                     NpcDialog.show(NPC.CICI,["你收集的黄晶矿不足0xff00005块0xffffff，请继续努力！"],["恩！我会再接再厉的！"]);
                  }
               });
               ItemManager.getCollection();
            }
            if(Boolean(arr[2]) && !arr[3])
            {
               ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,function(param1:ItemEvent):void
               {
                  ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,arguments.callee);
                  var _loc3_:SingleItemInfo = ItemManager.getCollectionInfo(400002);
                  if(_loc3_ != null && _loc3_.itemNum >= 5)
                  {
                     TasksManager.complete(94,3,null,true);
                  }
                  else
                  {
                     NpcDialog.show(NPC.CICI,["你收集的甲烷燃气不足0xff00005罐0xffffff，继续努力吧。"],["好的！这次我一定完成！"]);
                  }
               });
               ItemManager.getCollection();
            }
         });
      }
      
      public static function showIcon() : void
      {
      }
      
      public static function delIcon() : void
      {
      }
   }
}
