package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.iconLevel.IconController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialogNew_1;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   
   public class EvilIceMasterController
   {
      
      private static var BUFFERID_ARR:Array = [1290,1291,1292,1293];
      
      private static var _currentBufferArr:Array = [];
      
      private static var _currentTaskFunc:Function;
      
      private static var _currentStep:int = 0;
      
      private static var _currentMapId:int;
      
      private static var _currentMc:MovieClip;
      
      private static var _currentTaskId:int;
       
      
      public function EvilIceMasterController()
      {
         super();
      }
      
      private static function hideIcon() : void
      {
         LevelManager.iconLevel.visible = false;
         LevelManager.toolsLevel.visible = false;
         ToolBarController.panel.hide();
         KTool.showMapAllPlayerAndMonster(false);
      }
      
      private static function showIcon() : void
      {
         LevelManager.iconLevel.visible = true;
         LevelManager.toolsLevel.visible = true;
         ToolBarController.panel.show();
         KTool.showMapAllPlayerAndMonster(true);
      }
      
      private static function loaderMc(param1:Function = null) : void
      {
         var fun:Function = param1;
         ResourceManager.getResource(ClientConfig.getMapAnimate("EvilIceMaster_MapMovie"),function(param1:MovieClip):void
         {
            if(Boolean(_currentMc) && Boolean(_currentMc.parent))
            {
               _currentMc.parent.removeChild(_currentMc);
            }
            _currentMc = param1;
            hideIcon();
            MapManager.currentMap.topLevel.addChild(_currentMc);
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      private static function initTask() : void
      {
         _currentBufferArr = BUFFERID_ARR;
         _currentTaskFunc = startTask;
         _currentTaskId = 0;
      }
      
      public static function startTask(param1:int) : void
      {
         var taskId:int = param1;
         var story:TaskStoryPlayer = new TaskStoryPlayer();
         story.useNewDialog = true;
         NpcDialogNew_1._HasDanmu = false;
         hideIcon();
         switch(currentStep)
         {
            case 0:
               story.addMapMovie([_currentMc,1,"mc1"]);
               story.addDialog([NPC.HAIDAO_YIWAN,["你好，傲慢之神。"]]);
               story.addDialog([NPC.BOLAIDE,["……如果不是主人的命令，我才不想和你们这些低级星域的家伙有什么来往！"]]);
               story.addDialog([NPC.HAIDAO_YIWAN,["不要这样嘛，我们和七神可是友好的同盟！"]]);
               story.addDialog([NPC.BOLAIDE,["有话快说，和你们这些低等生物在一起我一分钟也不能忍受了。"]]);
               story.addDialog([NPC.HAIDAO_YIWAN,["那我们就开门见山，奉艾伯中将之命，我要唤醒玄冰之魂！"]]);
               story.addDialog([NPC.BOLAIDE,["！！你竟然知道它的存在？哼，它的脾气可不大好！"]]);
               story.addDialog([NPC.HAIDAO_YIWAN,["很快我们就要对赛尔号展开一波迅猛的攻势，有一个残暴的帮手总是好事。"]],null,function():void
               {
                  BufferRecordManager.setMyState(_currentBufferArr[0],true,function():void
                  {
                     StatManager.sendStat2014("1120冰魂之主支线","完成记录点1",StatManager.RUN_ACT_2015);
                     startTask(taskId);
                  });
               });
               break;
            case 1:
               story.addMapMovie([_currentMc,2,"mc2"]);
               story.addDialog([NPC.HAIDAO_YIWAN,["在这里？！"]]);
               story.addDialog([NPC.BOLAIDE,["是的，我可警告你，来自魔域的它可不好收买。"]]);
               story.addDialog([NPC.HAIDAO_YIWAN,["只要可以收买，价格总是可以商量的嘛。"]]);
               story.addDialog([NPC.BOLAIDE,["这么说吧，曾经收买它的人很多，但是现在都已经不在了。"]]);
               story.addDialog([NPC.HAIDAO_YIWAN,["如果不能成功收买它，艾伯中将也会分分钟让我不复存在的！"]],null,function():void
               {
                  BufferRecordManager.setMyState(_currentBufferArr[1],true,function():void
                  {
                     StatManager.sendStat2014("1120冰魂之主支线","完成记录点2",StatManager.RUN_ACT_2015);
                     startTask(taskId);
                  });
               });
               break;
            case 2:
               story.addFulMovie(["EvilIceMasterFull",true]);
               story.addMapMovie([_currentMc,3,"mc3"]);
               story.addDialog([NPC.BOLAIDE,["出卖自己的灵魂都没有丝毫的犹豫，你果然是个狠角色。"]]);
               story.addDialog([NPC.HAIDAO_YIWAN,["做了这一行就得对自己狠一点，对海盗而言这可是珍贵的品质！"]]);
               story.addDialog([NPC.XUAN_BING_ZHI_HUN,["泊莱德，如果你不是对自己那高傲的灵魂过分珍惜，你就可以成为我的主人了！"]]);
               story.addDialog([NPC.BOLAIDE,["哼！"]],null,function():void
               {
                  BufferRecordManager.setMyState(_currentBufferArr[2],true,function():void
                  {
                     StatManager.sendStat2014("1120冰魂之主支线","完成记录点3",StatManager.RUN_ACT_2015);
                     startTask(taskId);
                  });
               });
               break;
            case 3:
               story.addMapMovie([_currentMc,3,"mc3"]);
               story.addDialog([NPC.XUAN_BING_ZHI_HUN,["我已经沉睡了太久，现在是什么情况？是要我帮你把这个泊莱德教训一顿吗？"]]);
               story.addDialog([NPC.HAIDAO_YIWAN,["不要胡闹，我们和七罪是联盟。现在我们有一个共同的敌人——赛尔号。"]]);
               story.addDialog([NPC.XUAN_BING_ZHI_HUN,["赛尔号？"]]);
               story.addDialog([NPC.BOLAIDE,["说到赛尔号你不知道，但是他们有一个朋友可是你的老相识！"]]);
               story.addDialog([NPC.XUAN_BING_ZHI_HUN,["谁？"]]);
               story.addDialog([NPC.BOLAIDE,["泰坦。"]]);
               story.addDialog([NPC.XUAN_BING_ZHI_HUN,["你说的是把我封印在这祭坛之内的那个泰坦么？"]]);
               story.addDialog([NPC.BOLAIDE,["放眼泰坦星域，还有几个泰坦？"]]);
               story.addDialog([NPC.XUAN_BING_ZHI_HUN,["哼，我和泰坦势不两立，他的朋友就是我的敌人！"]]);
               story.addDialog([NPC.BOLAIDE,["很好，现在共识达成了。"]]);
               story.addMapMovie([_currentMc,4,"mc4"],null,function():void
               {
                  var itemsId:Array = null;
                  var b:Boolean = false;
                  itemsId = [300157,400063,1400352];
                  b = true;
                  ItemManager.updateItems(itemsId,function():void
                  {
                     var _loc1_:int = 0;
                     while(_loc1_ < itemsId.length)
                     {
                        if(ItemManager.getNumByID(itemsId[_loc1_]) >= ItemXMLInfo.getMaxNum(itemsId[_loc1_]))
                        {
                           Alarm.show("你的" + ItemXMLInfo.getName(itemsId[_loc1_]) + "已经达到上限了，暂时无法获得奖励哦！请将其消耗掉一部分再来领取奖励！");
                           iconManager(null);
                           destroy();
                           showIcon();
                           b = false;
                        }
                        _loc1_++;
                     }
                     if(b)
                     {
                        completeTask();
                     }
                  });
               });
         }
         story.start();
      }
      
      private static function completeTask() : void
      {
         TasksManager.accept(3115,function():void
         {
            StatManager.sendStat2014("1120冰魂之主支线","完成记录点4",StatManager.RUN_ACT_2015);
            TasksManager.complete(3115,0,function():void
            {
               BufferRecordManager.setMyState(_currentBufferArr[3],true,function():void
               {
                  iconManager(null);
                  destroy();
                  showIcon();
               });
            });
         });
      }
      
      private static function destroy() : void
      {
         MapManager.currentMap.topLevel.removeChild(_currentMc);
         _currentMc.stop();
         _currentMc = null;
         _currentBufferArr = null;
         _currentTaskFunc = null;
         _currentTaskId = 0;
      }
      
      private static function get currentStep() : int
      {
         if(!BufferRecordManager.getMyState(_currentBufferArr[0]))
         {
            return 0;
         }
         if(!BufferRecordManager.getMyState(_currentBufferArr[1]))
         {
            return 1;
         }
         if(!BufferRecordManager.getMyState(_currentBufferArr[2]))
         {
            return 2;
         }
         return 3;
      }
      
      public static function isTaskComplete() : Boolean
      {
         if(BufferRecordManager.getMyState(BUFFERID_ARR[3]))
         {
            return true;
         }
         return false;
      }
      
      public static function iconClick(param1:MovieClip = null) : void
      {
         var mc:MovieClip = param1;
         if(!isTaskComplete())
         {
            initTask();
            loaderMc(function():void
            {
               startTask(3115);
            });
         }
         else
         {
            Alarm.show("你已经完成任务，请期待后续精彩任务！");
         }
      }
      
      public static function iconManager(param1:MovieClip) : void
      {
         if(isTaskComplete())
         {
            IconController.hideIcon("EvilIceMaster_icon");
         }
         else
         {
            IconController.showIcon("EvilIceMaster_icon");
         }
      }
   }
}
