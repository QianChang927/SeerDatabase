package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.StoryLoaderManager;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.DisplayObject;
   import flash.display.InteractiveObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class LeiyiGaiya_LeiGuangZhiyiController
   {
      
      public static const BUFFER_ID:uint = 814;
      
      private static var _map:BaseMapProcess;
      
      private static var _taskMC:MovieClip;
       
      
      public function LeiyiGaiya_LeiGuangZhiyiController()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         _map = param1;
         taskBtn.visible = false;
         quipment.visible = false;
      }
      
      public static function start() : void
      {
         if(checkPreTask())
         {
            MovieClip(taskBtn["leiyi"]).addEventListener(MouseEvent.CLICK,onShowLayiDialog);
            MovieClip(taskBtn["gaiya"]).addEventListener(MouseEvent.CLICK,onShowGaiYaDialog);
            showEquipment();
            MovieClip(taskBtn).mcFlag.visible = false;
         }
         else
         {
            taskBtn.addEventListener(MouseEvent.CLICK,onClickPlayStory);
         }
         MovieClip(taskBtn).buttonMode = true;
         taskBtn.visible = true;
      }
      
      private static function onShowLayiDialog(param1:MouseEvent) : void
      {
         NpcDialog.show(NPC.LEIYI,["0xff00009月19日0xffffff，我将会和盖亚进行第三次对决，届时参加活动还可以获得我雷伊的超进化道具哦！"],["雷神加油，我一定会来！"]);
      }
      
      private static function onShowGaiYaDialog(param1:MouseEvent) : void
      {
         NpcDialog.show(NPC.GAIYA,["0xff00009月19日0xffffff，我将会和雷伊进行第三次对决，届时参加活动还可以获得我盖亚的超进化道具哦！"],["战神加油，我一定会来！"]);
      }
      
      private static function checkPreTask() : Boolean
      {
         return BufferRecordManager.getMyState(BUFFER_ID);
      }
      
      private static function onClickPlayStory(param1:MouseEvent) : void
      {
         StoryLoaderManager.insatnce.swfName = "animation_819_1";
         StoryLoaderManager.insatnce.setloaderHandler = getStoryMCHanlder;
      }
      
      private static function getStoryMCHanlder(param1:MovieClip) : void
      {
         taskBtn.visible = false;
         MainManager.selfVisible = false;
         MapManager.currentMap.depthLevel.visible = false;
         _taskMC = param1;
         KTool.hideMapAllPlayerAndMonster();
         playPreStory();
      }
      
      private static function playPreStory() : void
      {
         SocketConnection.send(1022,86062533);
         TaskDiaLogManager.single.playStory(prevStroy,function():void
         {
            taskBtn.removeEventListener(MouseEvent.CLICK,onClickPlayStory);
            showEquipment();
            taskBtn.visible = true;
            DisplayUtil.removeForParent(_taskMC);
            MainManager.selfVisible = true;
            MapManager.currentMap.depthLevel.visible = true;
            BufferRecordManager.setMyState(BUFFER_ID,true);
            start();
            onOpenModule();
            SocketConnection.send(1022,86062534);
         });
      }
      
      private static function showEquipment() : void
      {
         quipment.visible = true;
         quipment.addEventListener(MouseEvent.CLICK,onOpenModule);
         ToolTipManager.add(InteractiveObject(quipment),"闪耀吧！雷光之翼！");
      }
      
      private static function onOpenModule(param1:MouseEvent = null) : void
      {
         SocketConnection.send(1022,86062535);
         ModuleManager.showModule(ClientConfig.getAppModule("LeiGuangZhiYiPanel"));
      }
      
      private static function get prevStroy() : Array
      {
         var _loc1_:Array = [];
         var _loc2_:int = 1;
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 1,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["我的雷光之翼……为什么会变成这样……"],["我的雷光之翼……为什么会变成这样……"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["雷伊，这股力量太邪恶，不属于你！赶紧把它驱散吧，我只想和真正的雷神交手！"],["我也想这样！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["事到如今，看来只能割弃掉这个翅膀，才能彻底摆脱这股邪恶的力量了。"],["那你的雷光之翼呢？"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 2,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["好了盖亚，这次终于可以和你堂堂正正地交手了！"],["这不是我要的！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["雷伊，你的金色雷光之翼呢？我只想领教你超进化的力量！"],["雷光之翼？我试试看。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 3,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["怎么会这样，是不是受到了刚刚那个魔化翅膀的影响？"],["有可能。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["刚才割弃魔化翅膀的时候把雷光之翼也一起带走了……"],["雷神，你不能失去雷光之翼！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AILONGNISI,["师父，刚刚飘走的金色羽毛，一定是雷光之翼，我们去帮你找回来！"],["对！雷神，我们帮你找！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 4,"mc"]));
         return _loc1_;
      }
      
      private static function get taskMC() : MovieClip
      {
         return _taskMC;
      }
      
      private static function get taskBtn() : DisplayObject
      {
         return _map.conLevel["mcTaskBtn"];
      }
      
      private static function get quipment() : DisplayObject
      {
         return _map.depthLevel["quipmentMC"];
      }
      
      public static function destory() : void
      {
         quipment.removeEventListener(MouseEvent.CLICK,onOpenModule);
         MovieClip(taskBtn["leiyi"]).removeEventListener(MouseEvent.CLICK,onShowLayiDialog);
         MovieClip(taskBtn["gaiya"]).removeEventListener(MouseEvent.CLICK,onShowGaiYaDialog);
         _map = null;
         _taskMC = null;
      }
   }
}
