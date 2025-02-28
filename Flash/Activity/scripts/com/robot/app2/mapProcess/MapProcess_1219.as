package com.robot.app2.mapProcess
{
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialogNew_1;
   import flash.events.MouseEvent;
   
   public class MapProcess_1219 extends BaseMapProcess
   {
       
      
      public function MapProcess_1219()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         this.btnLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
      }
      
      protected function onMouseClick(param1:MouseEvent) : void
      {
         var index:int = 0;
         var event:MouseEvent = param1;
         var str:String = String(event.target.name);
         if(str.indexOf("petBtn_") != -1)
         {
            index = int(event.target.name.split("_")[1]);
            NpcDialogNew_1._HasDanmu = false;
            switch(index)
            {
               case 0:
                  NpcDialogNew_1.show(2703,["凡人，不要妄图挑战神威！神兽岂是你们能挑战的？"],["我无所畏惧！","我只是路过而已！"],[function():void
                  {
                     MapManager.changeMapWithCallback(1223,function():void
                     {
                        ModuleManager.showAppModule("WhiteTigerCompMainPanel");
                     });
                  }]);
                  break;
               case 1:
                  NpcDialogNew_1.show(NPC.CHIHUNAGZHUQUE,["我是烈焰的主宰，神兽的怒火将自天而降，焚尽一切的邪恶！"],["我要向你挑战","我就是路过而已！"],[function():void
                  {
                     ModuleManager.showAppModule("YanhuangZhuqueCompleteBodyMainPanel");
                  },null,function():void
                  {
                  }]);
                  break;
               case 2:
                  ModuleManager.showAppModule("LingshougongzhuEvoMainPanel");
                  break;
               case 3:
                  NpcDialogNew_1.show(NPC.QINGLONGWANQUANTI_NPCHEAD,["吾乃天苍玄魂•青龙，汝前来是要挑战我的神威嘛！"],["神兽大人，我向你发出挑战","我就是路过而已"],[function():void
                  {
                     MapManager.changeMapWithCallback(1222,function():void
                     {
                        ModuleManager.showAppModule("QinglongCompleteBodyMainPanel");
                     });
                  },null,function():void
                  {
                  }]);
                  break;
               case 4:
                  NpcDialogNew_1.show(NPC.WANSHIBEIMIN_XUANWU,["我的坚甲无人能敌，你要撼动我的神威吗？"],["我要挑战你！","我就是路过而已！"],[function():void
                  {
                     ModuleManager.showAppModule("BeiMingXuanwuCompleteMainPanel");
                  },null,function():void
                  {
                  }]);
            }
         }
      }
      
      override public function destroy() : void
      {
         NpcDialogNew_1._HasDanmu = true;
         this.btnLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
   }
}
