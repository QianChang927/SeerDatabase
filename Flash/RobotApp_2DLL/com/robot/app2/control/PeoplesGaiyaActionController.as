package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class PeoplesGaiyaActionController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskMC:MovieClip;
       
      
      public function PeoplesGaiyaActionController()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(!BufferRecordManager.getMyState(949))
         {
            SocketConnection.send(1022,86066232);
            KTool.hideMapPlayerAndMonster();
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_423_1"),function(param1:MovieClip):void
            {
               taskMC = param1;
               _map.btnLevel.addChild(param1);
               MapObjectControl.hideOrShowAllObjects(false);
               playPreStory();
            });
         }
         else
         {
            addEvent();
         }
      }
      
      private static function addEvent() : void
      {
      }
      
      private static function playPreStory() : void
      {
         TaskDiaLogManager.single.playStory(getStorys(),function():void
         {
            KTool.showMapPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            DisplayUtil.removeForParent(taskMC);
            BufferRecordManager.setMyState(949,true);
            addEvent();
            openNewYearActionPanel();
            SocketConnection.send(1022,86066233);
         });
      }
      
      private static function getStorys() : Array
      {
         var _loc1_:Array = [];
         var _loc2_:int = 0;
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 1,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["哈哈，再怎么换衣服，还不是手下败将，还敢主动来找我？"],["盖亚，你还是这么傲慢。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["这一次的我的实力会出乎你的意料，到处寻找你只不过是为了一雪前耻！"],["估计你没有这个机会了。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["既然你都主动送上门来了，那就别怪我不客气了！"],["来吧，盖亚！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 2,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["怎么会这样？明明是曾经的手下败将，怎么会变得这么强？"],["我早就不是曾经那个我了。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE_NEW,["看来没有超进化的你，根本不值得和我交手，更不配称为战神，或许这个名头，以后给我用会更合适。"],["你只是个冒牌货！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["战神只有一个，那就是我盖亚！"],["那就拿出你的本事吧！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 3,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["恩师，为什么曾经的手下败将如今都变得这么强？难道真是我太弱了吗？我不甘心！"],["不是这样的，盖亚。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LAOKE_LEIDE,["不停地战斗，你只是太累了……你永远是我的好徒弟，永远的战神盖亚！"],["恩师，可是……"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["为什么我连超进化的力量都找不到了，这样怎么可能打败那个艾辛格？"],["要相信自己！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 4,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["我明白了恩师，我对胜与负太过执着了，无论怎么样，我就是我，宇宙唯一的盖亚！"],["就是这样，看清自己，相信自己！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LAOKE_LEIDE,["如果你能够克服自己的内心，没有人能成为你的对手！艾辛格是一个强敌，但终究只会是你荣耀之路上的一个踏脚石！"],["谢谢，恩师！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["我会找回自己的！战神盖亚，终将王者归来！"],["加油，盖亚！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 5,"mc"]));
         return _loc1_;
      }
      
      private static function openTrainPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("AifeiyaTrainMainPanel"));
      }
      
      private static function openNewYearActionPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("AifeiyaTrainMainPanel"));
      }
      
      public static function destroy() : void
      {
      }
   }
}
