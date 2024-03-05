package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_1225 extends BaseMapProcess
   {
       
      
      private var _indexArr:Array;
      
      private var _Len1:int;
      
      private var _Len2:int;
      
      public function MapProcess_1225()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         switch(param1.target.name)
         {
            case "npcMc_0":
               ModuleManager.showModule(ClientConfig.getAppModule("TheBattleOfTheCentury2017MainPanel"),"正在打开....");
               break;
            case "npcMc_1":
               ModuleManager.showModule(ClientConfig.getAppModule("TheBattleOfTheCentury2017MainPanel"),"正在打开....");
         }
      }
      
      protected function onMouseClick(param1:MouseEvent) : void
      {
         var randomRankIndex:int;
         var limtNum:int;
         var maxNum:int;
         var randomIndex:int = 0;
         var event:MouseEvent = param1;
         var index:int = int(event.currentTarget.name.split("_")[1]);
         randomIndex = Math.random() * 2 + 1;
         var arr:Array = [this._Len1,this._Len2];
         var allLen:int = int(arr[randomIndex - 1]);
         if(allLen == 0)
         {
            randomIndex = randomIndex == 1 ? 2 : 1;
            allLen = this._Len1 > 0 ? this._Len1 : this._Len2;
         }
         randomRankIndex = Math.random() * allLen;
         limtNum = randomRankIndex > 0 ? randomRankIndex - 1 : 0;
         maxNum = randomRankIndex;
         KTool.getRangeRankList(121,randomIndex,limtNum,maxNum,function(param1:Array):void
         {
            var _loc2_:uint = uint(KTool.subByte(param1[0].score,24,8));
            var _loc3_:Object = {
               "userid":param1[0].userid,
               "score":_loc2_,
               "nick":param1[0].nick,
               "index":randomIndex
            };
            ModuleManager.showModule(ClientConfig.getAppModule("TheBattleOfTheCentury2017AcceptGauntletPanel"),"正在打开....",_loc3_);
         });
      }
      
      override public function destroy() : void
      {
         super.destroy();
      }
   }
}
