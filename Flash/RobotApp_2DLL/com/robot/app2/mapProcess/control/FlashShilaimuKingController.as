package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class FlashShilaimuKingController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _taskMc:MovieClip;
       
      
      public function FlashShilaimuKingController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         _map = param1;
         var _loc2_:int = 0;
         while(_loc2_ < 6)
         {
            _map.conLevel["mcMonster"]["btn_" + _loc2_].addEventListener(MouseEvent.CLICK,onShowDialog);
            _loc2_++;
         }
         MovieClip(_map.conLevel["mcMonster"]).buttonMode = true;
         MovieClip(_map.conLevel["mcShilaimuKing"]).addEventListener(MouseEvent.CLICK,showPanel);
         MovieClip(_map.conLevel["mcShilaimuKing"]).buttonMode = true;
         MovieClip(_map.conLevel["mcFlashShilaimuKing"]).addEventListener(MouseEvent.CLICK,showPanel);
         MovieClip(_map.conLevel["mcFlashShilaimuKing"]).buttonMode = true;
         if(!BitBuffSetClass.getState(22438))
         {
            SocketConnection.send(1022,86073389);
            playStory();
         }
      }
      
      protected static function onShowDialog(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         var index:int = int(String(event.currentTarget.name).split("_")[1]);
         var npcIds:Array = [NPC.SHANGUANGBOKEER,NPC.SHANGUANG_DIANJITU,NPC.SHANGUANG_BULUKEKE,NPC.SHANGUANG_KAIQILADUN,NPC.SHANGUANG_XIANRENSHU,NPC.SHANGUANGAIFEIYA];
         NpcDialog.show(npcIds[index],["0xFF0000" + MainManager.actorInfo.nick + "0xffffff我们一定要抓紧时间，史莱姆国王的生命危在旦夕！"],["恩，我这就寻找闪光能量！"],[function():void
         {
            showPanel();
         }]);
      }
      
      private static function showPanel(param1:* = null) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("FlashShilaimuKingMainPanel"));
      }
      
      private static function playStory() : void
      {
         _map.conLevel["mcMonster"].visible = false;
         _map.conLevel["mcShilaimuKing"].visible = false;
         _map.conLevel["mcFlashShilaimuKing"].visible = false;
         getMc(function(param1:MovieClip):void
         {
            taskMC = param1;
            _map.btnLevel.addChild(taskMC);
            KTool.hideMapAllPlayerAndMonster();
            _map.depthLevel.visible = false;
            playPreStory();
         });
      }
      
      private static function playPreStory() : void
      {
         TaskDiaLogManager.single.playStory(prevStroy,function():void
         {
            SocketConnection.send(1022,86073390);
            _map.depthLevel.visible = true;
            KTool.showMapAllPlayerAndMonster();
            BitBuffSetClass.setState(22438,1);
            DisplayUtil.removeForParent(taskMC);
            _map.conLevel["mcMonster"].visible = true;
            _map.conLevel["mcShilaimuKing"].visible = true;
            _map.conLevel["mcFlashShilaimuKing"].visible = true;
            showPanel();
         });
      }
      
      private static function get prevStroy() : Array
      {
         var _loc1_:Array = [];
         var _loc2_:int = 0;
         var _loc3_:String = "20140319_55";
         var _loc4_:String = "cartoon/flashshilaimuking";
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 1,"mc1"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["魔灵王果然在这里，他们手中不就是永恒碎片？可恶的家伙，我一定要想办法拿回来才行！"],["他们究竟想做什么呢？"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 2,"mc2"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOLINGKING,["永恒树下的胖子，你来这里做什么，永恒碎片只属于伟大的天魔组织！"],["魔灵王，你会为现在的所作所为付出代价的！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHILAIMU_KING,["永恒石和永恒碎片都属于永恒星，你们休想占为己有！"],["哼哼…就凭你这个胖子也想阻止我们？"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOLUONAER,["主人，别和他废话，让我去解决它吧！"],["很好，想舒展筋骨的话就去吧！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.CARTOON,0,null,null,[_loc4_]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOLINGKING,["哈哈…史莱姆国王，难道你也想成为那几个永恒之王一样，永远变成石像吗？！"],["住口，今天我一定要拿回永恒碎片！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOLINGKING,["既然这样那我就成全你，就让你和你的永恒国度一起变成石像吧！"],["我一定会守卫永恒国度的！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 3,"mc3"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOLINGKING,["哈哈哈…史莱姆胖子，看你还能坚持多久！"],["我是不会放弃的！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 4,"mc4"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOLINGKING,["可恶…好不容易到手的永恒碎片，居然又没了！"],["怎么可能，有两个国王？"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ShANGUANGSHILAIMUKING,["你们这群卑鄙的家伙，给我滚出创世广场，别再让我看到你们，否则决不饶恕！"],["这家伙实力远超于躺在地上的胖子！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOLINGKING,["今天算你走运，下次就没这么幸运了，天魔组织会一直跟着你们的！"],["奥罗纳尔，我们走！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 5,"mc5"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHILAIMU_KING,["哥哥…是你吗？真的是你？这些年你都去哪里了！"],["弟弟…这些年确实为难你了！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHILAIMU_KING,["我没有食言，永恒石和永恒之树依然…完…好…无…损…！"],["好好休息吧！一切交给我！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 6,"mc6"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ShANGUANGSHILAIMUKING,["我们的能量有限，我现在需要大量的闪光能量！0xff0000" + MainManager.actorInfo.nick + "0xffffff你能帮助我们吗？"],["国王陛下，非常愿意为你效劳！"]));
         return _loc1_;
      }
      
      private static function getMc(param1:Function) : void
      {
         var fun:Function = param1;
         if(taskMC)
         {
            fun(taskMC);
         }
         else
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_966_0"),function(param1:MovieClip):void
            {
               taskMC = param1;
               fun(taskMC);
            });
         }
      }
      
      private static function set taskMC(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMC() : MovieClip
      {
         return _taskMc;
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
